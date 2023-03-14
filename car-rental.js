function Car_Rental(nb_km, nb_days){
    const r1 = 0.7;
    const r2 = 0.4;
    const r3 = 0.2;
    const ins = 0.3;
    const tva = 0.18;
    const p_d = 100;
    let cost_km = 0;
    let cost_days = 0;
    
    if(nb_km <= 100){
        cost_km = r1*nb_km + nb_days*ins; 
        cost_km = cost_km*(1+tva);
    }
    
    if(nb_km > 100 && cost_km <1000){
        cost_km = r1*100  + r2*(nb_km - 100) + nb_days*ins ;
        cost_km = cost_km*(1+tva);
    }
    
    if(nb_km >= 1000 ){
        cost_km = r1*100 + r2*900 + r3*(nb_km - 1000) + nb_days*ins;
        cost_km = cost_km*(1+tva);
    }
    
    cost_days = nb_days*p_d + nb_days*ins;
    cost_days = cost_days*(1+tva);
    
    if(cost_km > cost_days){
        console.log("le cout favorable est cost_days: " + cost_days);
    }else{
        console.log("le cout favorable est cost_km: " + cost_km);
    }
}