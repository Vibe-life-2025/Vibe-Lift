package com.example.mentalhealth_app.models;

public class Patien {
    private String name;
    private int age;
    private String issue;

    public Patien(String name, int age, String issue) {
        this.name = name;
        this.age = age;
        this.issue = issue;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getIssue() {
        return issue;
    }

    public void setIssue(String issue) {
        this.issue = issue;
    }
}

