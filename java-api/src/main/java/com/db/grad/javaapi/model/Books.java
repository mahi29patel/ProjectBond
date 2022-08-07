package com.db.grad.javaapi.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "book")
public class Books {

    @Id
    private int id;
    private String bookname;

    public Books() {
    }

    public Books(int id, String bookname, List<Trade> trades) {
        this.id = id;
        this.bookname = bookname;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBookname() {
        return bookname;
    }

    public void setBookname(String bookname) {
        this.bookname = bookname;
    }

}
