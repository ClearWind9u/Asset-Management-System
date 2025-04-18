package com.example.asset_management.repository;

import com.example.asset_management.dto.response.room.RoomResponse;
import com.example.asset_management.entity.room.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {
    List<Room> findByBuildingId(Long buildingId);

    boolean existsByIdAndBuildingId(Long roomId, Long buildingId);
}

