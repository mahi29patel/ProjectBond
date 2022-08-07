package com.db.grad.javaapi.model;

import com.db.grad.javaapi.model.Books;
import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "trade")
public class Trade {

    @Id
    private int id;
    private int bookid;
    private int securityid;
    private String bookname;
    private int userid;
    private int quantity;
    private String status;
    private float price;
    private int buySell;
    private Date tradedate;
    private Date settlementdate;

    @JsonBackReference
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="bookid", insertable = false, updatable = false)
    private Books book;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name="securityid", insertable = false, updatable = false)
    private Security security;

    public Trade() {
    }

    public Trade(int id, int bookid, int securityid, int quantity, String status, float price, int buySell, Date tradedate, Date settlementdate, Books book, Security security) {
        this.id = id;
        this.bookid = bookid;
        this.securityid = securityid;
        this.quantity = quantity;
        this.status = status;
        this.price = price;
        this.buySell = buySell;
        this.tradedate = tradedate;
        this.settlementdate = settlementdate;
        this.book = book;
        this.security = security;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getBookid() {
        return bookid;
    }

    public void setBookid(int bookid) {
        this.bookid = bookid;
    }

    public int getSecurityid() {
        return securityid;
    }

    public void setSecurityid(int securityid) {
        this.securityid = securityid;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public int getBuySell() {
        return buySell;
    }

    public void setBuySell(int buySell) {
        this.buySell = buySell;
    }

    public Date getTradedate() {
        return tradedate;
    }

    public void setTradedate(Date tradedate) {
        this.tradedate = tradedate;
    }

    public Date getSettlementdate() {
        return settlementdate;
    }

    public void setSettlementdate(Date settlementdate) {
        this.settlementdate = settlementdate;
    }

    public String getBookname() { return bookname; }

    public void setBookname(String bookname) { this.bookname = bookname; }

    public int getUserid() { return userid; }

    public void setUserid(int userid) { this.userid = userid; }

    public Books getBook() {
        return book;
    }

    public void setBook(Books book) {
        this.book = book;
    }

    public Security getSecurity() { return security; }
    public void setSecurity() { this.security = security; }
}
