
export interface FuncionesBiologicas {
  apetito?: string;
  sed?: string;
  sueno?: string; // Mapeado desde 'sueño' mediante @JsonProperty("sueno")
  estadoAnimo?: string;
  deposicion?: string;
}