package com.example.disneyattractions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class DisneyAttractionsService {
    @Autowired
    DisneyAttractionsRepository disneyAttractionsRepository;

    //CREATE
    public void addDisneyAttraction( DisneyAttraction disneyAttraction){
        disneyAttractionsRepository.save(disneyAttraction);
    }

    //READ
    public DisneyAttraction getDisneyAttractionById(long id){
        Optional<DisneyAttraction> disneyAttraction = disneyAttractionsRepository.findById(id);
        if(disneyAttraction.isEmpty()){
            throw new DisneyAttractionNotFoundException();
        }
        return disneyAttraction.get();
    }

    public DisneyAttraction getRandomDisneyAttraction(){
        return disneyAttractionsRepository.getRandomDisneyAttraction();
    }

    public List<Long> getDisneyAttractionIds(){
        return disneyAttractionsRepository.getDistinctIds();
    }

    public List<String> getDisneyParks(){
        return disneyAttractionsRepository.getDistinctDisneyParks();
    }

    public List<DisneyAttraction> getDisneyAttractionsByPark(String parkName, int limit){
        List<DisneyAttraction> disneyAttractions = disneyAttractionsRepository.getAllByDisneyPark(parkName);

        return disneyAttractions.stream().limit(limit).collect(Collectors.toList());
    }

    public List<DisneyAttraction> getAllDisneyAttractions(int limit){
        return disneyAttractionsRepository.findAll().stream().limit(limit).collect(Collectors.toList());
    }

    //UPDATE
    public void updateDisneyAttraction (DisneyAttraction newDisneyAttraction, long id ){
        if(!disneyAttractionsRepository.existsById(id)){
            throw new DisneyAttractionNotFoundException();
        }
        newDisneyAttraction.setId(id);
        disneyAttractionsRepository.save(newDisneyAttraction);
    }

    //DELETE
    @Transactional
    public void deleteDisneyAttractionById(long id){
        if(!disneyAttractionsRepository.existsById(id)){
            throw new DisneyAttractionNotFoundException();
        }
        disneyAttractionsRepository.deleteDisneyAttractionById(id);
    }

}
