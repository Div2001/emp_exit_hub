package com.example.jwtsecuritydemo.entity;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

public class UserInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String email;
    private String password;
    private  String roles;

    //FLAG
//    private String empid;
//
//    public String getEmpid() {
//        return empid;
//    }
//
//    public void setEmpid(String empid) {
//        this.empid = empid;
//    }
//    @Column(name = "flag")
//    private Integer flag;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }

    //FLAG
//    public Integer getFlag() {
//        return flag;
//    }
//
//    public void setFlag(Integer flag) { this.flag = flag;}
}
