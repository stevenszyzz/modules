import React from 'react'
import { Route, Switch } from 'react-router'
import { PokemonsGrid } from '../components/heroes/PokemonsGrid'
import { ModulesScreen } from '../components/modules/ModulesScreen'
import { Navbar } from '../components/ui/Navbar'

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path='/pokemons' component={PokemonsGrid} />
                <Route exact path='/' component={ModulesScreen} />
            </Switch>
        </>
    )
}
