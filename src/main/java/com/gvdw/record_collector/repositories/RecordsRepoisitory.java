/*
* Created By Gullian Van Der Walt 2020
*/

package com.gvdw.RecordCollector.Repositories;


import com.gvdw.RecordCollector.Models.Records;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.PagingAndSortingRepository;


@Repository
public interface RecordsRepoisitory extends JpaRepository<Records, Long> {

//        @Query(value ="SELECT * FROM records WHERE "
//                + " records.artist LIKE ?1% OR records.album LIKE ?1% "
//                + " OR records.format LIKE ?1%", nativeQuery = true)
//        public Page<Records> getAllRecords(String keyword, Pageable pageable);

}
