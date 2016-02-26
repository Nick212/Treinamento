using System.Collections.Generic;
using API.ViewModel;
using API.Controllers;

namespace API.Models
{
    public static class Restaurants
    {
        public static ICollection<RestaurantViewModel> GetAll()
        {
            return  new List<RestaurantViewModel>
            {
                new RestaurantViewModel
                {
                    Id = 19398404 ,
                    Nome = "A Osteria Gusto"
                }, new RestaurantViewModel
                {
                    Id = 19398425 ,
                    Nome = "Auguri Pizzaria e Forneria"
                }, new RestaurantViewModel
                {
                    Id = 19398467 ,
                    Nome = "Benvindo Bistro Restaurante"
                }, new RestaurantViewModel
                {
                    Id = 19398448 ,
                    Nome = "Beggiato Restaurante"
                }, new RestaurantViewModel
                {
                    Id = 19398489 ,
                    Nome = "Cantina Piacenza"
                }, new RestaurantViewModel
                {
                    Id = 19398505 ,
                    Nome = "Ficus Restaurante"
                }, new RestaurantViewModel
                {
                    Id =  19398543,
                    Nome = "L'Entrecôte"
                }, new RestaurantViewModel
                {
                    Id = 19398572 ,
                    Nome = "Restaurante Italiano Maurizio Gallo"
                }, new RestaurantViewModel
                {
                    Id = 19398595 ,
                    Nome = "Restaurante Mes Amis"
                }, new RestaurantViewModel
                {
                    Id = 19411589 ,
                    Nome = "Nonna Carmela"
                }, new RestaurantViewModel
                {
                    Id =  1160779,
                    Nome = "Ouro Minas"
                }, new RestaurantViewModel
                {
                    Id =19398629  ,
                    Nome = "Restaurante Massas Pichita Lanna"
                }, new RestaurantViewModel
                {
                    Id = 19411494 ,
                    Nome = "Tchê Parrilla"
                }, new RestaurantViewModel
                {
                    Id =  19398657,
                    Nome = "Yakan Lounge"
                }, new RestaurantViewModel
                {
                    Id = 19429250 ,
                    Nome = "Ristorante Don Pasquale"
                }, new RestaurantViewModel
                {
                    Id = 19429316 ,
                    Nome = "Maharaj"
                }, new RestaurantViewModel
                {
                    Id =  19465481,
                    Nome = "Bistrô de Crepes"
                }, new RestaurantViewModel
                {
                    Id = 19429383 ,
                    Nome = "Verano Studio Gourmet"
                }, new RestaurantViewModel
                {
                    Id = 19429432 ,
                    Nome = "Bistrô Deslandes"
                }, new RestaurantViewModel
                {
                    Id = 19429571 ,
                    Nome = "Espaço Gourmet Ana Lobo"
                }, new RestaurantViewModel
                {
                    Id = 19429603 ,
                    Nome = "Amadeus"
                }, new RestaurantViewModel
                {
                    Id =  19429631,
                    Nome = "AA Wine Experience"
                }, new RestaurantViewModel
                {
                    Id = 19429671 ,
                    Nome = "Italia Ristorante"
                }, new RestaurantViewModel
                {
                    Id = 19429708 ,
                    Nome = "Osteria Degli Angeli"
                }, new RestaurantViewModel
                {
                    Id = 19429727 ,
                    Nome = "Villa Emporium - Armazém Gourmet"
                }, new RestaurantViewModel
                {
                    Id =  19435364,
                    Nome = "Vivace"
                }, new RestaurantViewModel
                {
                    Id =  19435368,
                    Nome = "Italia Grill"
                }, new RestaurantViewModel
                {
                    Id =  1220164,
                    Nome = "Hermengarda"
                }
            };

            SupplierController supplier = new SupplierController();
            supplier.Get();
        }
    }
}