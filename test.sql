
declare 
v_nom varchar2(20);
v_prix produit.prix%type;
v_id constant number not null :=9;
begin 
select nom,prix
into v_nom,v_prix from produit 
where id=v_id;
IF v_prix >3500 THEN
update produit set prix =prix*0.80 where id =v_id;
DBMS_OUTPUT.PUT_line(' reduction faite avec succes');
else
v_prix := v_prix*1.20;
DBMS_OUTPUT.put_line('le prix ttc de '||v_nom||' est '||v_prix||' Dhs');

    END IF;
EXCEPTION
      WHEN too_many_rows THEN
      DBMS_OUTPUT.PUT_LINE('aucun produit');
        when others then
              DBMS_OUTPUT.PUT_LINE('erreur  inconnu '||SQLERRM);

        

end;