package com.example.disneyattractions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class DisneyAttractionsController {

    @Autowired
    DisneyAttractionsRepository disneyAttractionsRepository;

    //CREATE


    //READ
    @GetMapping("/attractions")
    public ArrayList<DisneyAttraction> getDisneyAttraction(){
        return disneyAttractionsRepository.getAllDisneyAttractions();
    }

    @GetMapping("/attractions/random")
    public DisneyAttraction getRandomDisneyAttraction(){
        return disneyAttractionsRepository.getRandomDisneyAttraction();
    }

    @GetMapping("/attractions/{id}")
    public DisneyAttraction getDisneyAttractionById(@PathVariable long id){
        return disneyAttractionsRepository.getDisneyAttractionById(id);
    }

    @GetMapping("/attraction/{name}")
    public DisneyAttraction getDisneyAttractionByName(@PathVariable String name){
        return disneyAttractionsRepository.getDisneyAttractionByName(name);
    }
    //UPDATE


    //DELETE
    @DeleteMapping("/attractions/{id}")
    public String deleteDisneyAttractionById(@PathVariable long id){
        disneyAttractionsRepository.deleteDisneyAttractionById(id);
        return "Disney Attraction: " + id + " has been deleted";
    }

    @DeleteMapping("/attractions/{name}")
    public String deleteDisneyAttractionByName(@PathVariable String name){
        disneyAttractionsRepository.deleteDisneyAttractionByName(name);
        return "Disney Attraction: " + name + " has been deleted";
    }

}
