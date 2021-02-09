package com.gvdw.record_collector.services;

import com.gvdw.record_collector.models.Records;

import java.util.List;
import java.util.Optional;

public interface RecordsService {

    List<Records> getRecords();

    void save(Records records);

    Optional<Records> findById(Long id);

    void delete(Long id);
}
