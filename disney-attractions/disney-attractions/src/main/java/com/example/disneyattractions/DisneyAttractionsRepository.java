package com.example.disneyattractions;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DisneyAttractionsRepository extends JpaRepository<DisneyAttraction, Long> {
    //READ
    List<DisneyAttraction> getAllByDisneyPark(String parkName);

    @Query(value = "SELECT DISTINCT id from disneyAttractions", nativeQuery = true)
    List<Long> getDistinctIds();

    @Query(value = "SELECT DISTINCT park_name FROM disneyAttractions ORDER BY park_name", nativeQuery = true)
    List<String> getDistinctDisneyParks();

    @Query(value = "SELECT * FROM disneyAttractions ORDER BY RAND() LIMIT 1", nativeQuery = true)
    DisneyAttraction getRandomDisneyAttraction();

    //DELETE
    void deleteDisneyAttractionById(long id);
}
