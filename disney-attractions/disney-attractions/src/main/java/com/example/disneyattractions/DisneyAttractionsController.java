package com.example.disneyattractions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DisneyAttractionsController {

    @Autowired
    DisneyAttractionsService disneyAttractionsService;

    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(DisneyAttractionNotFoundException exception){
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    //CREATE
    @PostMapping("/attraction")
    public ResponseEntity<DisneyAttraction> createDisneyAttraction(@RequestBody DisneyAttraction disneyAttraction){
        disneyAttractionsService.addDisneyAttraction(disneyAttraction);
        return ResponseEntity.status(HttpStatus.CREATED).body(disneyAttraction);
    }

    //READ
    @GetMapping("/attractions")
    public ResponseEntity<List<DisneyAttraction>> getDisneyAttractions(@RequestParam(required = false) String parkName, @RequestParam(defaultValue = "10") int limit){
        if(parkName != null){
            return ResponseEntity.status(HttpStatus.OK).body(disneyAttractionsService.getDisneyAttractionsByPark(parkName, limit));
        }
        return ResponseEntity.status(HttpStatus.OK).body(disneyAttractionsService.getAllDisneyAttractions(limit));
    }

//    @GetMapping("/parks")
//    public ResponseEntity<List<String>> getDisneyParks(){
//        return ResponseEntity.status(HttpStatus.OK).body(disneyAttractionsService.getDisneyParks());
//    }

    @GetMapping("/attractions/ids")
    public ResponseEntity<List<Long>> getDisneyAttractionsIds(){
        return ResponseEntity.status(HttpStatus.OK).body(disneyAttractionsService.getDisneyAttractionIds());
    }

    @GetMapping("/attractions/random")
    public ResponseEntity<DisneyAttraction> getRandomDisneyAttraction(){
        return ResponseEntity.status(HttpStatus.OK).body(disneyAttractionsService.getRandomDisneyAttraction());
    }

    @GetMapping("/attractions/{id}")
    public ResponseEntity<DisneyAttraction> getDisneyAttractionById(@PathVariable long id){
        return ResponseEntity.status(HttpStatus.OK).body(disneyAttractionsService.getDisneyAttractionById(id));
    }

//    @GetMapping("/attraction/{name}")
//    public DisneyAttraction getDisneyAttractionByName(@PathVariable String name){
//        return disneyAttractionsService.getDisneyAttractionByName(name);
//    }
/******************************************************************************************************/
    //UPDATE
    @PutMapping("/attractions/{id}")
    public ResponseEntity<DisneyAttraction> updateDisneyAttration(@RequestBody DisneyAttraction newDisneyAttraction, @PathVariable long id){
        newDisneyAttraction.setId(id);
        disneyAttractionsService.updateDisneyAttraction(newDisneyAttraction, id);
        return ResponseEntity.status(HttpStatus.OK).body(newDisneyAttraction);
    }

    //DELETE
    @DeleteMapping("/attractions/{id}")
    public ResponseEntity<Void> deleteDisneyAttractionById(@PathVariable long id){
        disneyAttractionsService.deleteDisneyAttractionById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
