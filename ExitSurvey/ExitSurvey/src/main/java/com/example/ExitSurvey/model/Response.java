package com.example.ExitSurvey.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "exit_surveys") // mongoDB collection name
public class Response {
    @Id
    private String id;

    private String empId;
    private List<String> leaveReason;
    private String likes;
    private String dislikes;
    private String compensation;
    private String valued;
    private String fairness;
    private String feedback;

    public Response(){

    }

    public Response(String empId, List<String> leaveReason, String likes, String dislikes, String compensation, String valued, String fairness, String feedback) {
//        this.id = id;
        this.empId = empId;
        this.leaveReason = leaveReason;
        this.likes = likes;
        this.dislikes = dislikes;
        this.compensation = compensation;
        this.valued = valued;
        this.fairness = fairness;
        this.feedback = feedback;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmpId() {
        return empId;
    }

    public void setEmpId(String empId) {
        this.empId = empId;
    }

    public List<String> getLeaveReason() {
        return leaveReason;
    }

    public void setLeaveReason(List<String> leaveReason) {
        this.leaveReason = leaveReason;
    }

    public String getLikes() {
        return likes;
    }

    public void setLikes(String likes) {
        this.likes = likes;
    }

    public String getDislikes() {
        return dislikes;
    }

    public void setDislikes(String dislikes) {
        this.dislikes = dislikes;
    }

    public String getCompensation() {
        return compensation;
    }

    public void setCompensation(String compensation) {
        this.compensation = compensation;
    }

    public String getValued() {
        return valued;
    }

    public void setValued(String valued) {
        this.valued = valued;
    }

    public String getFairness() {
        return fairness;
    }

    public void setFairness(String fairness) {
        this.fairness = fairness;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    @Override
    public String toString() {
        return "Response{" +
                "id='" + id + '\'' +
                ", empId='" + empId + '\'' +
                ", leaveReason='" + leaveReason + '\'' +
                ", likes='" + likes + '\'' +
                ", dislikes='" + dislikes + '\'' +
                ", compensation='" + compensation + '\'' +
                ", valued='" + valued + '\'' +
                ", fairness='" + fairness + '\'' +
                ", feedback='" + feedback + '\'' +
                '}';
    }
}
