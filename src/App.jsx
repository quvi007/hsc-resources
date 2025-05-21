import { useState, useEffect } from 'react';
import axios from 'axios';

import './aux.css';

function App() {
    return (
        <div className="container">
            <h2 className="mb-4">
                <i className="bi bi-journal-arrow-down"></i> Chapter Resources
            </h2>
            <table className="table table-bordered align-middle">
                <thead>
                    <tr>
                        <th style={{ width: '20%' }}>Chapter Name</th>
                        <th style={{ width: '80%' }}>Resources</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="chapter-title">Vector</td>
                        <td>
                            <a href="#" className="btn btn-success btn-sm btn-download">MCQ Exam</a>{' '}
                            <a href="#" className="btn btn-success btn-sm btn-download">MCQ Exam 2</a>{' '}
                            <a href="#" className="btn btn-primary btn-sm btn-download">Written Exam</a>{' '}
                            <a href="#" className="btn btn-warning btn-sm btn-download">Worksheet</a>{' '}
                            <a href="#" className="btn btn-danger btn-sm btn-download">Advanced Worksheet</a>
                        </td>
                    </tr>
                    <tr>
                        <td className="chapter-title">Thermodynamics</td>
                        <td>
                            <a href="#" className="btn btn-success btn-sm btn-download">MCQ Exam</a>{' '}
                            <a href="#" className="btn btn-success btn-sm btn-download">MCQ Exam 2</a>{' '}
                            <a href="#" className="btn btn-primary btn-sm btn-download">Written Exam</a>{' '}
                            <a href="#" className="btn btn-warning btn-sm btn-download">Worksheet</a>{' '}
                            <a href="#" className="btn btn-danger btn-sm btn-download">Advanced Worksheet</a>
                        </td>
                    </tr>
                    <tr>
                        <td className="chapter-title">Static Electricity</td>
                        <td>
                            <a href="#" className="btn btn-success btn-sm btn-download">MCQ Exam</a>{' '}
                            <a href="#" className="btn btn-success btn-sm btn-download">MCQ Exam 2</a>{' '}
                            <a href="#" className="btn btn-primary btn-sm btn-download">Written Exam</a>{' '}
                            <a href="#" className="btn btn-warning btn-sm btn-download">Worksheet</a>{' '}
                            <a href="#" className="btn btn-danger btn-sm btn-download">Advanced Worksheet</a>
                        </td>
                    </tr>
                    <tr>
                        <td className="chapter-title">Current Electricity</td>
                        <td>
                            <a href="#" className="btn btn-success btn-sm btn-download">MCQ Exam</a>{' '}
                            <a href="#" className="btn btn-success btn-sm btn-download">MCQ Exam 2</a>{' '}
                            <a href="#" className="btn btn-primary btn-sm btn-download">Written Exam</a>{' '}
                            <a href="#" className="btn btn-warning btn-sm btn-download">Worksheet</a>{' '}
                            <a href="#" className="btn btn-danger btn-sm btn-download">Advanced Worksheet</a>
                        </td>
                    </tr>
                    <tr>
                        <td className="chapter-title">Physical Optics</td>
                        <td>
                            <a href="#" className="btn btn-success btn-sm btn-download">MCQ Exam</a>{' '}
                            <a href="#" className="btn btn-success btn-sm btn-download">MCQ Exam 2</a>{' '}
                            <a href="#" className="btn btn-primary btn-sm btn-download">Written Exam</a>{' '}
                            <a href="#" className="btn btn-warning btn-sm btn-download">Worksheet</a>{' '}
                            <a href="#" className="btn btn-danger btn-sm btn-download">Advanced Worksheet</a>
                        </td>
                    </tr>
                    <tr>
                        <td className="chapter-title">Modern Physics</td>
                        <td>
                            <a href="#" className="btn btn-success btn-sm btn-download">MCQ Exam</a>{' '}
                            <a href="#" className="btn btn-success btn-sm btn-download">MCQ Exam 2</a>{' '}
                            <a href="#" className="btn btn-primary btn-sm btn-download">Written Exam</a>{' '}
                            <a href="#" className="btn btn-warning btn-sm btn-download">Worksheet</a>{' '}
                            <a href="#" className="btn btn-danger btn-sm btn-download">Advanced Worksheet</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default App;
