package com.example.demoInertia.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

// import com.example.demoInertia.model.Organization;
import com.example.demoInertia.service.UploadImageService;

@RestController
@RequestMapping("/Upload")
@CrossOrigin
public class UploadOrganizationImagesController {

    @Autowired 
    UploadImageService uploadImageService;
    
    @PostMapping("/Image")
    public String handleImageUpload(@RequestParam MultipartFile[] file) throws IOException{

        for (MultipartFile f : file){
            uploadImageService.uploadFile(f);
        }
        
        return "Upload completed successfully";
    }
}
