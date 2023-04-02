package com.example.demoInertia.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demoInertia.model.City;



@Repository
public interface CityRepository extends JpaRepository <City, Integer>{

    List<City> findByIsActive(boolean b);
    
}
