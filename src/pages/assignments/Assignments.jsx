import './Assignments.css'
import Assignment from "../../components/assignment/Assignment";
import assignments from "../../../src/assignments.json"
import { useState, useRef } from 'react';
import Button from '../../components/button/Button';
import { XIcon } from "@phosphor-icons/react";
import FilterItem from '../../components/filterItem/FilterItem';
import ReactPaginate from "react-paginate";

function Assignments() {
    const [filteredPlace, setFilteredPlace] = useState([]);
    const [filteredHours, setFilteredHours] = useState([]);
    const [filteredEducation, setFilteredEducation] = useState([]);
    const [openFilter, setOpenFilter] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const itemPerPage = 10;
    const offset = currentPage * itemPerPage;
    const sectionRef = useRef(null);

    const filtersActive =
        filteredPlace.length > 0 ||
        filteredHours.length > 0 ||
        filteredEducation.length > 0;

    const filteredAssignments = assignments.filter((assignment) => {
        const matchPlace =
            filteredPlace.length === 0 || filteredPlace.includes(assignment.place);

        const matchHours =
            filteredHours.length === 0 || filteredHours.includes(assignment.hours);

        const matchEducation =
            filteredEducation.length === 0 || filteredEducation.includes(assignment.education);

        return matchPlace && matchHours && matchEducation;
    });

    const paginatedAssignments = filteredAssignments.slice(offset, offset + itemPerPage);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
      };

    return (<main>
        <section ref={sectionRef} className='assignments-section'>
            <div className='filter'>
                <div className='filtermenu'>
                    <h2>Filter</h2>
                    {filtersActive && (
                        <Button
                            className="reset-filter icon-button black"
                            type="button"
                            icon={<XIcon size={20} weight="bold" />}
                            onClick={() => {
                                setFilteredPlace([]);
                                setFilteredHours([]);
                                setFilteredEducation([]);
                            }}
                        />
                    )}
                    <FilterItem name= "place" filteredItem={filteredPlace} filteredItem2={filteredEducation} filteredItem3={filteredHours} setFilter={setFilteredPlace} filterNaam="Plaats" filter2="education" filter3="hours" openFilter={openFilter} setOpenFilter={setOpenFilter} />
                    <FilterItem name= "hours" filteredItem={filteredHours} filteredItem2={filteredEducation} filteredItem3={filteredPlace} setFilter={setFilteredHours} filterNaam="Uren" filter2="education" filter3="place" openFilter={openFilter} setOpenFilter={setOpenFilter} />
                    <FilterItem name= "education" filteredItem={filteredEducation} filteredItem2={filteredPlace} filteredItem3={filteredHours} setFilter={setFilteredEducation} filterNaam="Opleidingsniveau" filter2="place" filter3="hours" openFilter={openFilter} setOpenFilter={setOpenFilter} />
                </div>
            </div>
            <div className='assignments-div'>
                {filteredAssignments.length === 0 ? (
                    <h3 className='no-assignments'>Geen opdrachten gevonden voor deze selectie.</h3>
                ) : (
                    paginatedAssignments.map((assignment) => (
                        <Assignment
                            key={assignment.id}
                            id={assignment.id}
                            title={assignment.title}
                            place={assignment.place}
                            hours={assignment.hours}
                            salary={assignment.salary}
                            education={assignment.education}
                            buttoncolor={assignment.buttoncolor}
                            text={assignment.text}
                        />
                    ))
                )}
            </div>
        </section>
        <section className="pagination-section">
            <ReactPaginate
        previousLabel={"  Vorige  "}
        nextLabel={"Volgende"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(filteredAssignments.length / itemPerPage)}
        marginPagesDisplayed={5}
        pageRangeDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName={"pagina-button"}
        activeClassName={"active"}
        pageLinkClassName={"text-button pageLink"}
        previousLinkClassName={"text-button pageBut"}
        nextLinkClassName={"text-button pageBut" }
        disabledClassName={"disable"}
      />
        </section>
    </main>
    )
}
export default Assignments;