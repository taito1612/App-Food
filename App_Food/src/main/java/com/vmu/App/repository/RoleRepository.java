package com.vmu.App.repository;

import java.util.Optional;

import com.vmu.App.models.ERole;
import com.vmu.App.models.Role;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}
