package com.example.demoInertia.dto;


public class OrganizationParams {

    private String name;
    private int categoryId;
    private int cityId;
    private boolean isAgeControlled;
    private boolean isPetFriendly;
    private boolean isPWDAdapted;


    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getCategoryId() {
        return categoryId;
    }
    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }
    public int getCityId() {
        return cityId;
    }
    public void setCityId(int cityId) {
        this.cityId = cityId;
    }
    public boolean getIsAgeControlled() {
        return isAgeControlled;
    }
    public void setAgeControlled(boolean isAgeControled) {
        this.isAgeControlled = isAgeControled;
    }
    public boolean isPetFriendly() {
        return isPetFriendly;
    }
    public void setPetFriendly(boolean isPetFriendly) {
        this.isPetFriendly = isPetFriendly;
    }
    public boolean isPWDAdapted() {
        return isPWDAdapted;
    }
    public void setPWDAdapted(boolean isPWDAdapted) {
        this.isPWDAdapted = isPWDAdapted;
    }
   
    
}
