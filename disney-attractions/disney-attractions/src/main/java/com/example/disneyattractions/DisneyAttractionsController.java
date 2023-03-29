package com.example.disneyattractions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DisneyAttractionsController {

    @Autowired
    DisneyAttractionsService disneyAttractionsService;

    @ExceptionHandler
    public String handleExceptions(DisneyAttractionNotFoundException exception){
        return exception.getMessage();
    }

    //CREATE
    @PostMapping("/attraction")
    public DisneyAttraction createDisneyAttraction(@RequestBody DisneyAttraction disneyAttraction){
        disneyAttractionsService.addDisneyAttraction(disneyAttraction);
        return disneyAttraction;
    }

    //READ
    @GetMapping("/attractions")
    public List<DisneyAttraction> getDisneyAttractions(@RequestParam(required = false) String parkName, @RequestParam(defaultValue = "10") int limit){
        if(parkName != null){
            return disneyAttractionsService.getDisneyAttractionsByPark(parkName,limit);
        }
        return disneyAttractionsService.getAllDisneyAttractions(limit);
    }

    @GetMapping("/parks")
    public List<String> getDisneyParks(){
        return disneyAttractionsService.getDisneyParks();
    }

    @GetMapping("/attractions/ids")
    public List<Long> getDisneyAttractionsIds(){
        return disneyAttractionsService.getDisneyAttractionIds();
    }

    @GetMapping("/attractions/random")
    public DisneyAttraction getRandomDisneyAttraction(){
        return disneyAttractionsService.getRandomDisneyAttraction();
    }

    @GetMapping("/attractions/{id}")
    public DisneyAttraction getDisneyAttractionById(@PathVariable long id){
        return disneyAttractionsService.getDisneyAttractionById(id);
    }

//    @GetMapping("/attraction/{name}")
//    public DisneyAttraction getDisneyAttractionByName(@PathVariable String name){
//        return disneyAttractionsService.getDisneyAttractionByName(name);
//    }
/******************************************************************************************************/
    //UPDATE
    @PutMapping("/attractions/{id}")
    public DisneyAttraction updateDisneyAttration(@RequestBody DisneyAttraction newDisneyAttraction, @PathVariable long id){
        newDisneyAttraction.setId(id);
        disneyAttractionsService.updateDisneyAttraction(newDisneyAttraction, id);
        return newDisneyAttraction;
    }

    //DELETE
    @DeleteMapping("/attractions/{id}")
    @Transactional
    public String deleteDisneyAttractionById(@PathVariable long id){
        disneyAttractionsService.deleteDisneyAttractionById(id);
        return "Disney Attraction: " + id + " has been deleted";
    }
}
