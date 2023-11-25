package com.example.jwtsecuritydemo.service;

import com.example.jwtsecuritydemo.entity.UserInfo;
import com.example.jwtsecuritydemo.repository.UserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;

@Service
public class UserInfoService implements UserDetailsService {

    @Autowired
    private UserInfoRepository repository;

    @Autowired
    private PasswordEncoder encoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<UserInfo> userDetail = repository.findByName(username);
        return  userDetail.map(UserInfoDetails::new)
                .orElseThrow( () -> new UsernameNotFoundException("User Not found " + username));
    }

    public String addUser(UserInfo userInfo){
        userInfo.setPassword(encoder.encode(userInfo.getPassword()));
        repository.save(userInfo);
        return "User Added Successfully";
    }

    public String updateEmployee(int id,UserInfo userInfo) {
        Optional<UserInfo> userData = repository.findById(id);
        if (userData.isPresent()) {
            UserInfo _userInfo = userData.get();
            _userInfo.setName(userInfo.getName());
            _userInfo.setPassword(encoder.encode(userInfo.getPassword()));
            _userInfo.setRoles(userInfo.getRoles());
            repository.save(_userInfo);
            return "Updated Succesfully";
        }else{
            return "Server Error";
        }
    }
}
