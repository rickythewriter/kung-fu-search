import { useState, useEffect } from 'react'
import { createSortedHandList } from '../../helpers';
import hands from '../../hands.json';
import './Search.css'

export default function Search() {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    /* pagination */
    const [idxStart, setIdxStart] = useState(0);
    const [idxEnd, setIdxEnd] = useState(idxStart + 5);

    useEffect(() => {
        if (query.trim().length > 0) {
            let sortedHands = createSortedHandList(query, hands);
            setIdxStart(0);
            setIdxEnd(idxStart + 5);
            setResults(sortedHands);
        } else {
            setResults([]);
        }
    }, [query])

    return (
        <div class='table'>
            <div className='form-row'>
                <label>Search</label>
                <input
                    type="text"
                    onChange={e => {
                        setQuery(e.target.value);
                    }}
                    value={query}
                />
            </div>
            {results.length > 0 &&
                <>
                    <h2>Closest Results</h2>
                    <table>
                        <tr>
                            <th>Jyutping</th>
                            <th>Translation</th>
                            <th>Element</th>
                        </tr>
                        {results.slice(idxStart, idxEnd).map(result =>
                            <tr key={result.id}>
                                <td>{result.jyutping}</td>
                                <td>{result.translation}</td>
                                <td>{result.element}</td>
                                {/* <td>{result.distance}</td> */}
                            </tr>
                        )}
                    </table>
                    <div className='navButtons'>
                        <div id='results-previous'>
                            {idxStart > 0 &&
                                (
                                    <button
                                        onClick={() => {
                                            setIdxStart(idxStart - 5)
                                            setIdxEnd(idxEnd - 5)
                                        }}
                                    >
                                        previous
                                    </button>
                                )
                            }
                        </div>
                        <div id='results-next'>
                            {
                                idxEnd <= results.length &&
                                (
                                    <button
                                        onClick={() => {
                                            setIdxStart(idxStart + 5)
                                            setIdxEnd(idxEnd + 5)
                                        }}
                                    >
                                        next
                                    </button>
                                )
                            }
                        </div>
                </div>
            </>
        }
        </div>
    )
}