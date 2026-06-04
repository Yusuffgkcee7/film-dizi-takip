const DropdownFilter = ({onFilterChange}) => {
    return (
        <div className="d-flex justify-content-center mb-5">
            <select className="form-select w-auto shadow-sm" onChange={(e) => onFilterChange(e.target.value)}>
                <option value="all">Tümü</option>
                <option value="watched">İzlendi</option>
                <option value="towatch">İzlenecekler</option>
            </select>
        </div>
    );
}

export default DropdownFilter;