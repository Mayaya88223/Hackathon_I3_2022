<?php
class Produit {
        public string $nom;
        public float $prix;

        public function __construct(string $nom, float $prix)
        {
                $this->nom = $nom;
                $this->prix = $prix;
        }


        /**
         * Get the value of nom
         */
        public function getNom(): string
        {
                return $this->nom;
        }

        /**
         * Set the value of nom
         */
        public function setNom(string $nom): self
        {
                $this->nom = $nom;

                return $this;
        }

        /**
         * Get the value of prix
         */
        public function getPrix(): float
        {
                return $this->prix;
        }

        /**
         * Set the value of prix
         */
        public function setPrix(float $prix): self
        {
                $this->prix = $prix;

                return $this;
        }
}
