//testni podaci, podaci koji se učitavaju pri pokretanju aplikacije
import Recept from '../models/recept'

export const RECEPTI = [
  new Recept(0, "Palačinke", "Tekst izrade palačinki", "Desert"),
  new Recept(1, "Pizza", "Teskt recepta pizze", "Glavno jelo"),
  new Recept(2, "Čupavci", "Teskt recepta čupavaca", "Desert"),
  new Recept(3, "Rižot", "Teskt recepta rižota", "Predjelo"),
  new Recept(4, "Mačje oči", "Teskt recepta mačjih očiju", "Desert")
]