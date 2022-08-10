package com.db.grad.javaapi.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="security")
public class Security {
    @Id
    private int id;
    private int isin;
    private int cusip;
    private String issuer;
    private Date maturitydate;
    private int coupon;
    private String type;
    private float facevalue;
    private String status;

    private int assignee;

    public Security() {
    }

    public Security(int id, int isin, int cusip, String issuer, Date maturitydate, int coupon, String type, float facevalue, String status, int assignee) {
        this.id = id;
        this.isin = isin;
        this.cusip = cusip;
        this.issuer = issuer;
        this.maturitydate = maturitydate;
        this.coupon = coupon;
        this.type = type;
        this.facevalue = facevalue;
        this.status = status;
        this.assignee = assignee;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIsin() {
        return isin;
    }

    public void setIsin(int isin) {
        this.isin = isin;
    }

    public int getCusip() {
        return cusip;
    }

    public void setCusip(int cusip) {
        this.cusip = cusip;
    }

    public String getIssuer() {
        return issuer;
    }

    public void setIssuer(String issuer) {
        this.issuer = issuer;
    }

    public Date getMaturitydate() {
        return maturitydate;
    }

    public void setMaturitydate(Date maturitydate) {
        this.maturitydate = maturitydate;
    }

    public int getCoupon() {
        return coupon;
    }

    public void setCoupon(int coupon) {
        this.coupon = coupon;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public float getFacevalue() {
        return facevalue;
    }

    public void setFacevalue(float facevalue) {
        this.facevalue = facevalue;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getAssignee() {
        return assignee;
    }

    public void setAssignee(int assignee) {
        this.assignee = assignee;
    }
}
