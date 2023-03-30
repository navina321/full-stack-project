package com.example.disneyattractions;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.ArrayList;

@Entity
public class DisneyAttraction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String imageUrl;
    private String attractionName;
    private String park;
    private String location;
    private String heightLimit;
    private ArrayList<String> rideType;
    private String theme;
    private Boolean wheelchairAccessible;
    private String description;

    public DisneyAttraction() {
    }

    public DisneyAttraction(long id, String imageUrl, String attractionName, String park, String location, String heightLimit, ArrayList<String> rideType, String theme, Boolean wheelchairAccessible, String description) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.attractionName = attractionName;
        this.park = park;
        this.location = location;
        this.heightLimit = heightLimit;
        this.rideType = rideType;
        this.theme = theme;
        this.wheelchairAccessible = wheelchairAccessible;
        this.description = description;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getAttractionName() {
        return attractionName;
    }

    public void setAttractionName(String attractionName) {
        this.attractionName = attractionName;
    }

    public String getPark() {
        return park;
    }

    public void setPark(String park) {
        this.park = park;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getHeightLimit() {
        return heightLimit;
    }

    public void setHeightLimit(String heightLimit) {
        this.heightLimit = heightLimit;
    }

    public ArrayList<String> getRideType() {
        return rideType;
    }

    public void setRideType(ArrayList<String> rideType) {
        this.rideType = rideType;
    }

    public String getTheme() {
        return theme;
    }

    public void setTheme(String theme) {
        this.theme = theme;
    }

    public Boolean getWheelchairAccessible() {
        return wheelchairAccessible;
    }

    public void setWheelchairAccessible(Boolean wheelchairAccessible) {
        this.wheelchairAccessible = wheelchairAccessible;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
