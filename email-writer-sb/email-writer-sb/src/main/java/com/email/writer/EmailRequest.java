package com.email.writer;

public class EmailRequest {
    private String emailContent;
    private String tone;

    // Default constructor
    public EmailRequest() {}

    // Constructor with fields
    public EmailRequest(String emailContent, String tone) {
        this.emailContent = emailContent;
        this.tone = tone;
    }

    // Getter and Setter for emailContent
    public String getEmailContent() {
        return emailContent;
    }

    public void setEmailContent(String emailContent) {
        this.emailContent = emailContent;
    }

    // Getter and Setter for tone
    public String getTone() {
        return tone;
    }

    public void setTone(String tone) {
        this.tone = tone;
    }
}
