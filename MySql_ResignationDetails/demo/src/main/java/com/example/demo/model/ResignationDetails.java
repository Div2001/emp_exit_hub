package com.example.demo.model;


import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "employees")
public class ResignationDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private long empId;
    private String CurrentManager;

    private String ResignationReason;

    private LocalDate lastWorkingDay;

    private boolean NoticePeriod;

    //FLAG
//    @Column(name = "flag")
//    private Integer flag;

    public ResignationDetails() {
    }

    public ResignationDetails(long empId, String currentManager, String resignationReason, LocalDate lastWorkingDay, boolean noticePeriod) {
        this.empId = empId;
        this.CurrentManager = currentManager;
        this.ResignationReason = resignationReason;
        this.lastWorkingDay = lastWorkingDay;
        this.NoticePeriod = noticePeriod;

        //FLAG
//        this.flag = 1;
    }


    public long getEmpId() {
        return empId;
    }

    public void setEmpId(long empId) {
        this.empId = empId;
    }

    public String getCurrentManager() {
        return CurrentManager;
    }

    public void setCurrentManager(String currentManager) {
        this.CurrentManager = currentManager;
    }

    public String getResignationReason() {
        return ResignationReason;
    }

    public void setResignationReason(String resignationReason) {
        this.ResignationReason = resignationReason;
    }

    public LocalDate getLastWorkingDay() {
        return lastWorkingDay;
    }

    public void setLastWorkingDay(LocalDate lastWorkingDay) {
        this.lastWorkingDay = lastWorkingDay;
    }

    public boolean isNoticePeriod() {
        return NoticePeriod;
    }

    public void setNoticePeriod(boolean noticePeriod) {
        this.NoticePeriod = noticePeriod;
    }

    //FLAG
//    public Integer getFlag() {
//        return flag;
//    }
//
//    public void setFlag(Integer flag) { this.flag = flag;}
    @Override
    public String toString() {
        return "ResignationDetails{" +
                "id=" + id +
                ", empId=" + empId +
                ", CurrentManager='" + CurrentManager + '\'' +
                ", ResignationReason='" + ResignationReason + '\'' +
                ", lastWorkingDay=" + lastWorkingDay +
                ", NoticePeriod=" + NoticePeriod +

                //FLAG
//                ", flag=" + flag +

                '}';
    }
}
