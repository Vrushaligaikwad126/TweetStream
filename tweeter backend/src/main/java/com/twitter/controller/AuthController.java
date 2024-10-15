package com.twitter.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.twitter.config.JwtProvider;
import com.twitter.exception.UserException;
import com.twitter.model.User;
import com.twitter.model.Verification;
import com.twitter.repository.UserRepository;
import com.twitter.response.AuthResponse;
import com.twitter.service.CustomUserdetailsServiceImplementation;

import org.springframework.http.MediaType;


//@RestController
//@RequestMapping("/auth")
//public class AuthController {
//    @Autowired
//    private UserRepository userRepository;
//    
//    @Autowired
//    private PasswordEncoder passwordEncoder;
//    
//    @Autowired
//    private JwtProvider jwtProvider;
//    
//    @Autowired
//    private CustomUserdetailsServiceImplementation customerUserdetails;
//    
//    @PostMapping("/signup") // Specify the path here
//    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) throws UserException {
//        String email = user.getEmail();
//        String password = user.getPassword();
//        String fullName = user.getFullName();
//        String birthDate = user.getBirthDate();
//        
//        User isEmailExist = userRepository.findByEmail(email);
//        
//        if (isEmailExist != null) {
//            throw new UserException("Email is already used with another account");
//        }
//        
//        User createdUser = new User();
//        createdUser.setEmail(email);
//        createdUser.setPassword(passwordEncoder.encode(password)); // Encode password
//        createdUser.setBirthDate(birthDate);
//        createdUser.setVerification(new Verification());
//        
//        User savedUser = userRepository.save(createdUser);
//        
//        Authentication authentication = new UsernamePasswordAuthenticationToken(email, password);
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//        
//        String token = jwtProvider.generateToken(authentication);
//        
//        AuthResponse res = new AuthResponse(token, true);
//        
//        return new ResponseEntity<>(res, HttpStatus.CREATED);
//    }
//    
//    @PostMapping("/signin")
//    public ResponseEntity<AuthResponse> signin(@RequestBody User user) {
//        String username = user.getEmail();
//        String password = user.getPassword();
//        
//        Authentication authentication = authenticate(username, password);
//        
//        String token = jwtProvider.generateToken(authentication);
//        
//        AuthResponse res = new AuthResponse(token, true);
//        
//        return new ResponseEntity<>(res, HttpStatus.ACCEPTED);
//    }
//    
//    private Authentication authenticate(String username, String password) {
//        UserDetails userDetails = customerUserdetails.loadUserByUsername(username);
//        
//        if (userDetails == null) {
//            throw new BadCredentialsException("invalid username");
//        }
//        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
//            throw new BadCredentialsException("invalid username or password");
//        }
//        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
//    }
//}
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtProvider jwtProvider;

    @Autowired
    private CustomUserdetailsServiceImplementation customerUserdetails;

    @PostMapping(value = "/signup", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) throws UserException {
        String email = user.getEmail();
        
        // Check if email already exists
        if (userRepository.findByEmail(email) != null) {
            throw new UserException("Email is already used with another account");
        }
        
        // Create and save the new user
        User createdUser = new User();
        createdUser.setEmail(email);
        createdUser.setPassword(passwordEncoder.encode(user.getPassword())); // Encode password
        createdUser.setFullName(user.getFullName());
        createdUser.setBirthDate(user.getBirthDate());
        createdUser.setVerification(new Verification());
        
        User savedUser = userRepository.save(createdUser);
        
        // Authenticate the new user
        Authentication authentication = new UsernamePasswordAuthenticationToken(email, user.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authentication);
        
        // Generate JWT token
        String token = jwtProvider.generateToken(authentication);
        
        // Build response
        AuthResponse res = new AuthResponse(token, true);
        return new ResponseEntity<>(res, HttpStatus.CREATED);
    }

    @PostMapping(value = "/signin", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<AuthResponse> signin(@RequestBody User user) {
        String username = user.getEmail();
        String password = user.getPassword();
        
        // Authenticate user
        Authentication authentication = authenticate(username, password);
        
        // Generate JWT token
        String token = jwtProvider.generateToken(authentication);
        
        // Build response
        AuthResponse res = new AuthResponse(token, true);
        return new ResponseEntity<>(res, HttpStatus.OK); // Use HttpStatus.OK for successful login
    }

    private Authentication authenticate(String username, String password) {
        UserDetails userDetails = customerUserdetails.loadUserByUsername(username);
        
        // Check user details and password
        if (userDetails == null) {
            throw new BadCredentialsException("Invalid username or password");
        }
        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("Invalid username or password");
        }
        
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
}
