import React from 'react';
import './Table.css';

const Table = ({ data, onRowSelect, selectedRow }) => {

    const tableData = data.map((el, index) => (
        <tr 
            key={el.title + el.length}
            onClick={() => onRowSelect(index)}
            className={selectedRow === index ? 'selected': ''}>
            <td className="title">{el.title}</td>
            <td>{el.length}</td>
            <td>{el.category}</td>
            <td>{el.author}</td>
        </tr>
    ));

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Length</th>
                        <th>Category</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </div>
    )
};

export default Table;