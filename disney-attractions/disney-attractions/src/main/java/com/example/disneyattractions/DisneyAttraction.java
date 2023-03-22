package com.example.disneyattractions;

import java.util.Random;

public class DisneyAttraction {
    private long id = new Random().nextLong();
    private String attractionName;
    private String park;
    private String location;
    private int heightLimit;
    private String rideType;
    private String theme;
    private Boolean wheelchairAccessible;
    private String description;
    private int rating;

    public DisneyAttraction() {
    }

    public DisneyAttraction(long id, String attractionName, String park, String location, int heightLimit, String rideType, String theme, Boolean wheelchairAccessible, String description, int rating) {
        this.id = id;
        this.attractionName = attractionName;
        this.park = park;
        this.location = location;
        this.heightLimit = heightLimit;
        this.rideType = rideType;
        this.theme = theme;
        this.wheelchairAccessible = wheelchairAccessible;
        this.description = description;
        this.rating = rating;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public int getHeightLimit() {
        return heightLimit;
    }

    public void setHeightLimit(int heightLimit) {
        this.heightLimit = heightLimit;
    }

    public String getRideType() {
        return rideType;
    }

    public void setRideType(String rideType) {
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

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
