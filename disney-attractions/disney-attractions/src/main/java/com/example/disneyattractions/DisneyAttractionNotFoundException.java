package com.example.disneyattractions;

public class DisneyAttractionNotFoundException extends RuntimeException{
    public DisneyAttractionNotFoundException() {
        super("Disney Attraction has not been found");
    }
}
