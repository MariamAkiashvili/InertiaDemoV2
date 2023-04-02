package com.example.demoInertia.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

public interface UploadImageService {
    public void uploadFile(MultipartFile file) throws IOException;
}
