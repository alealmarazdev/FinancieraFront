import React from 'react';

import ButtonLink from '../ButtonLink'

function ContentWrite({to}) {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="w-75 text-justify my-4">
          El aumento de la demanda de transporte urbano de mercancías se debe a la concentración de la mayoría de la población europea en zonas urbanas y a la repartición de gran parte de la producción en esas áreas. Su eficiencia es importante porque las distancias relativas a este tipo de actividades han aumentado.
          <br></br>
          El transporte por carretera es uno de los medios más contaminantes y de los más utilizados. Es también responsable de dificultades medio ambientales y sociales, pero, en zonas urbanas no existen alternativas para hacer entregas y compensar sus desventajas.
          Los niveles de contaminación dependen de la forma de conducir, pero también de las características de los vehículos como:

          Cuando más viejo es el vehículo, más contamina (más emisiones de gases) y más alta será la probabilidad de accidente.
          Las dificultades de acceso al centro de las ciudades obligan a usar vehículos más pequeños, por lo cual aumentan el tráfico y la contaminación, lo que tiene repercusiones no solamente sobre el medio ambiente, sino también en la economía (economías de escala imposibles).
          Algunas restricciones impuestas al transporte por carretera (velocidad, pausas, etc.) perturban el tráfico, aumentan el consumo de combustible y entonces la contaminación.

          El aumento del tráfico y el hecho de que vehículos motorizados, no motorizados, de turismo, comerciales, etc. deban compartir las mismas carreteras incrementa la congestión y todos los problemas relacionados.
          Se implementaron políticas fiscales (tasas & impuestos) y subvenciones.
          Todos estos problemas son tanto económicos como sociales, ya que aparte de afectar la eficiencia del transporte y entonces del sistema económico, tienen también repercusiones en la calidad de vida de los ciudadanos.
        </div>
      </div>

      <ButtonLink Title="¡Empieza a jugar!" To={to}/>
    </div>
  )
}

export default  ContentWrite
