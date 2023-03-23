package com.example.disneyattractions;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.FileReader;
import java.util.ArrayList;

@Component
public class DisneyAttractionsInitializer {
    private final DisneyAttractionsRepository disneyAttractionsRepository;

    @Value("classpath:disneyAttractions.json")
    private Resource resourceFile;

    @Autowired
    public DisneyAttractionsInitializer(DisneyAttractionsRepository disneyAttractionsRepository) {
        this.disneyAttractionsRepository = disneyAttractionsRepository;
    }

    @PostConstruct
    public void init(){
        JSONParser jsonParser = new JSONParser();
        try(FileReader reader = new FileReader(resourceFile.getFile())){
            Object obj = jsonParser.parse(reader);

            JSONArray jsonArray = (JSONArray) obj;

            for(Object disneyAttraction: jsonArray){
                JSONObject disneyAttractionJSON = (JSONObject) disneyAttraction;

                long id = (long) disneyAttractionJSON.get("id");
                String attractionName = (String) disneyAttractionJSON.get("attraction_name");
                String park = (String) disneyAttractionJSON.get("park");
                String location = (String) disneyAttractionJSON.get("location");
                String heightLimit = (String) disneyAttractionJSON.get("height_limit");
                ArrayList<String> rideType = (ArrayList<String>) disneyAttractionJSON.get("ride_type");
                String theme = (String) disneyAttractionJSON.get("theme");
                Boolean wheelchairAccessible = (Boolean) disneyAttractionJSON.get("wheelchair_accessible");
                String description = (String) disneyAttractionJSON.get("description");

                disneyAttractionsRepository.addDisneyAttraction(new DisneyAttraction(id, attractionName, park, location, heightLimit,rideType,theme,wheelchairAccessible,description));
            }

        } catch (Exception e){
            e.printStackTrace();
        }
    }

}
