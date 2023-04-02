package com.example.demoInertia.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/Upload")
public class UploadOrganizationImagesController {
    @PostMapping("/Image")
    public String handleImageUpload(@RequestParam("file") MultipartFile file){
        return null;
    }
}
