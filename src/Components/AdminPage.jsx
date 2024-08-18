import React, { useState } from 'react';
import styled from 'styled-components';

const AdminPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: auto;
    margin-top: 40px;
`;

const AdminPageTitle = styled.h2`
    font-family: 'Segoe UI', sans-serif;
    color: #fff;
    margin-bottom: 20px;
`;

const InputField = styled.input`
    font-family: 'Segoe UI', sans-serif;
    width: 100%;
    padding: 15px;
    margin-bottom: 20px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 1rem;
`;

const SubmitButton = styled.button`
    font-family: 'Segoe UI', sans-serif;
    padding: 15px 25px;
    border: none;
    border-radius: 5px;
    background-color: #4caf50;
    color: white;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;
    font-size: 1rem;

    &:hover {
        background-color: #45a049;
    }
`;

const AdminPage = () => {
    const [stockName, setStockName] = useState('');
    const [zone, setZone] = useState('Buy');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [researchReport, setResearchReport] = useState(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log({
            stockName,
            zone,
            minPrice,
            maxPrice,
            researchReport,
        });
    };

    return (
        <AdminPageContainer>
            <AdminPageTitle>Stock Recommendation</AdminPageTitle>
            <form onSubmit={handleFormSubmit}>
                <InputField
                    type="text"
                    placeholder="Stock Name"
                    value={stockName}
                    onChange={(e) => setStockName(e.target.value)}
                    required
                />
                <InputField
                    list="zones"
                    placeholder="Select Zone"
                    value={zone}
                    onChange={(e) => setZone(e.target.value)}
                    required
                />
                <datalist id="zones">
                    <option value="Buy" />
                    <option value="Sell" />
                    <option value="Hold" />
                </datalist>
                <InputField
                    type="number"
                    placeholder="Minimum Price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    required
                />
                <InputField
                    type="number"
                    placeholder="Maximum Price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    required
                />
                <InputField
                    type="file"
                    accept="application/pdf"
                    onChange={(e) => setResearchReport(e.target.files[0])}
                    required
                />
                <SubmitButton type="submit">Submit</SubmitButton>
            </form>
        </AdminPageContainer>
    );
};

export default AdminPage;
