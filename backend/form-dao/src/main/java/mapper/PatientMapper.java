package mapper;

import bean.Patient;
import org.apache.ibatis.annotations.*;
import org.springframework.transaction.annotation.Transactional;
import sqlbuilder.PatientSQLBuilder;

import java.time.LocalDate;
import java.util.List;

/**
 * Created by liutkvai on 9/2/2016.
 */
@Mapper
public interface PatientMapper {

    @SelectProvider(type = PatientSQLBuilder.class, method = "buildListByFilter")
    @Transactional(readOnly = true)
    List<Patient> getListByFilter(final Integer doctorId);

    @Select("SELECT * FROM patient WHERE id = #{id}")
    @Transactional(readOnly = true)
    Patient getById(final Integer id);

    @Insert({ "INSERT INTO patient (first_name, last_name, occupation, birth_date, personal_id, email, phone, " +
            "mobile_phone, address, employer, doctor_id) VALUES (#{firstName}, #{lastName}, #{occupation}, " +
            "#{birthDate}, #{personalId}, #{email}, #{phone}, #{mobilePhone}, #{address}, #{employer}, #{doctorId})" })
    @Options(useGeneratedKeys = true, keyColumn = "id")
    void add(Patient patient);

    @Insert({ "UPDATE patient set first_name=#{firstName}, last_name=#{lastName}, occupation=#{occupation}, " +
            "birth_date=#{birthDate}, personal_id=#{personalId}, email=#{email}, phone=#{phone}, " +
            "mobile_phone=#{mobilePhone}, address=#{address}, employer=#{employer} WHERE id=#{id}" })
    int update(Patient patient);

}
