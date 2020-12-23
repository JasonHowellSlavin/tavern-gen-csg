import React, { Component } from 'react';
import './Table.scss';
import { connect } from 'react-redux';

export default function Table({gameLog}) {
        return(
            <section className={"table"}>
                    {gameLog.map((log) => <p>{log}</p>)}
            </section>
        )
}