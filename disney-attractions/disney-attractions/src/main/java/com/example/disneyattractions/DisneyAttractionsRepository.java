package com.example.disneyattractions;

import java.util.ArrayList;
import java.util.Random;

public class DisneyAttractionsRepository {
    ArrayList<DisneyAttraction> disneyAttractions = new ArrayList<>();
    Random random = new Random();

    //CREATE
     public void addDisneyAttraction(DisneyAttraction disneyAttraction){
         disneyAttractions.add(disneyAttraction);
     }
     //READ
    public DisneyAttraction getDisneyAttractionById(Long id){
         for (DisneyAttraction disneyAttraction: disneyAttractions){
             if(disneyAttraction.getId() == id){
                 return disneyAttraction;
             }
         }
         return null;
    }

    public DisneyAttraction getDisneyAttractionByName(String name){
        for (DisneyAttraction disneyAttraction: disneyAttractions){
            if(disneyAttraction.getAttractionName() == name){
                return disneyAttraction;
            }
        }
        return null;
    }

    public ArrayList<DisneyAttraction> getAllDisneyAttractions(){
         return disneyAttractions;
    }
    public DisneyAttraction getRandomDisneyAttraction(){
         return disneyAttractions.get(random.nextInt(disneyAttractions.size()));
    }

    //UPDATE


    //DELETE
    public void deleteDisneyAttractionById(long id){
         for (DisneyAttraction disneyAttraction: disneyAttractions){
            if(disneyAttraction.getId() == id){
                disneyAttractions.remove(id);
                return;
            }
         }
    }
    public void deleteDisneyAttractionByName(String name){
        for (DisneyAttraction disneyAttraction: disneyAttractions){
            if(disneyAttraction.getAttractionName() == name){
                disneyAttractions.remove(name);
                return;
            }
        }
    }
}
