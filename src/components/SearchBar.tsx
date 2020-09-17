import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const SearchBar = () => {
    const history = useHistory();
    const [contractAddress, setContractAddress] = useState("");

    async function handleClick(e: any) {
        e.preventDefault();
        
        if (contractAddress) {
            history.push(`/contracts/${contractAddress}`);
        }
    }

    return (
        <>
            <div>
                <form>
                    <span className="small text-muted">e.g. 0x932fc4fd0eEe66F22f1E23fBA74D7058391c0b15</span>
                    <input className="form-control" placeholder="Discover markets..." 
                            value={contractAddress} onChange={e => setContractAddress(e.target.value)} />

                    <button type="submit" className="btn btn-info mt-3" onClick={handleClick}>Search</button>
                </form>
            </div>
        </>
    );
}
