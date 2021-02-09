/*
 * This is the RecordsService Class
 * The RecordsRepository is injected via spring autowired annotation
 * The Spring Data JPA will generate a proxy instance at rumtime of the
 * RecordsRepository and inject this class, the RecordsService.
     Created By Gullian Van Der Walt 2020

 */
/**
 * @author Gullian
 */
package com.gvdw.record_collector.services;

//Imports
import com.gvdw.record_collector.repositories.RecordsRepoisitory;
import com.gvdw.record_collector.models.Records;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



@Service
public class RecordsServiceImpl  implements RecordsService{

    @Autowired private RecordsRepoisitory recordsRepo;

    public List<Records> getRecords(){
    return (List<Records>) recordsRepo.findAll();
  }

    public void save(Records records){
        recordsRepo.save(records);
    }

    // Get Records by id
    public Optional<Records> findById(Long id){
        return recordsRepo.findById(id);
    }

    //Delete Record
    public void delete(Long id) {
      recordsRepo.deleteById(id);
    }



}
