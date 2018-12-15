import React, { Component } from 'react';
import StatefulComponent from './components/stateful-component'

export default function App() {
  return (
    <div>
      <StatefulComponent
        items = {[
          "Jambu", "Pisang", "Melon", "Semangka", "Apel"
        ]}
        />
    </div>
  )
}
