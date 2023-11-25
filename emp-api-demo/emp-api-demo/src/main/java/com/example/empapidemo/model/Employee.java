package com.example.empapidemo.model;


import jakarta.persistence.*;



@Entity
@Table(name="employees")
public class Employee {
    @Id
    @GeneratedValue
    private int id;
    private String name;
    private String empid;
    private String joindate;
    private String dept;
    private String gender;
    private String dob;
    private String nationality;
    private String maritalstatus;

    // FLAG
//    @Column(name = "flag")
//    private Integer flag;

    public Employee() {
    }

    public Employee(String name, String empid, String joindate, String dept, String gender, String dob, String nationality, String maritalstatus) {
        this.name = name;
        this.empid = empid;
        this.joindate = joindate;
        this.dept = dept;
        this.gender = gender;
        this.dob = dob;
        this.nationality = nationality;
        this.maritalstatus = maritalstatus;

        //FLAG
//        this.flag = 1;


    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmpid() {
        return empid;
    }

    public void setEmpid(String empid) {
        this.empid = empid;
    }

    public String getJoindate() {
        return joindate;
    }

    public void setJoindate(String joindate) {
        this.joindate = joindate;
    }

    public String getDept() {
        return dept;
    }

    public void setDept(String dept) {
        this.dept = dept;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getMaritalstatus() {
        return maritalstatus;
    }

    public void setMaritalstatus(String maritalstatus) {
        this.maritalstatus = maritalstatus;
    }

//    FLAG
//    public Integer getFlag() {
//        return flag;
//    }
//
//    public void setFlag(Integer flag) {
//        this.flag = flag;
//    }
    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", empid='" + empid + '\'' +
                ", joindate='" + joindate + '\'' +
                ", dept='" + dept + '\'' +
                ", gender='" + gender + '\'' +
                ", dob='" + dob + '\'' +
                ", nationality='" + nationality + '\'' +
                ", maritalstaus='" + maritalstatus + '\'' +

                //FLAG
//                ", flag=" + flag + '\'' +

                '}';
    }
}
