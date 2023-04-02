package com.example.demoInertia.repository;
import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demoInertia.model.Organization;

@Repository
public interface OrganizationRepository extends JpaRepository <Organization, Integer>{

    List<Organization> findByIsActive(boolean b);

    List<Organization> findByCityAndCategoryAndIsAgeControlledAndIsPetFriendlyAndIsPWDAdapted(int i,
            int j, boolean ageControlled, boolean petFriendly, boolean pwdAdapted);

    // List<Organization> fOrganizations(Map<String, Object> parameters);

    // List<Organization> findByNonNativeQuery(Map<String, Object> parameters);

    // @Query(value="Select * from Organization where is_active=True", nativeQuery = true, 
    //                 queryRewriter = OrganizationRepository.class)
    
}
