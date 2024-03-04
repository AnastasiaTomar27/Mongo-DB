// Otetaan Mongo-ajuri käyttöön
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectId;
const dbname = "AnastasianTietokanta";
const url = "mongodb+srv://anastasiarcc:s4SVthZ27NF5TF8d@nodetuts.txnjo7o.mongodb.net/?retryWrites=true&w=majority&appName=nodetuts";
const collectionName = 'elokuvat';

MongoClient.connect(url)
    .then(client => {
        console.log("Yhteys serveriin onnistui");
        const dbCon = client.db(dbname);
        const collection = dbCon.collection(collectionName);
        
        /* collectionin haku */
        //return collection.find({}).toArray()

        // Tiedon lisäys
        //return collection.insertOne({elokuva: 'Avatar2: The Way of Water', ohjaaja: 'James Cameron', ingressi: 'AVATAR: THE WAY OF WATER -elokuvan tapahtumat sijoittuvat yli vuosikymmen ensimmäisen elokuvan tapahtumien jälkeen. Elokuva käynnistää tarinan Sullyn perheestä (johon kuuluvat Jake, Neytiri ja heidän lapsensa), ja kertoo siitä, miten pitkälle he ovat valmiita menemään suojellakseen toisiaan, vaikeuksista, jotka seuraavat heitä, kamppailuista, joita he joutuvat käymään pysyäkseen hengissä sekä tragedioista, joita he joutuvat kohtaamaan. Elokuvan on ohjannut James Cameron ja sen ovat tuottaneet Cameron ja Jon Landau. Elokuvan pääosissa nähdään Zoe Saldana, Sam Worthington, Sigourney Weaver, Stephen Lang, Cliff Curtis, Joel David Moore, CCH Pounder, Edie Falco, Jemaine Clement ja Kate Winslet.'});
        
        // Monen tiedon lisäys
        //return collection.insertMany([
        //     {
        //         elokuva: 'Anyone But You', 
        //         ohjaaja: 'Will Gluck', 
        //         ingressi: 'Anyone But You on särmikäs komedia, jossa Bea (Sydney Sweeney) ja Ben (Glen Powell) näyttävät täydelliseltä parilta, mutta kuumien ensitreffien jälkeen jokin muuttaa suhteen jääkylmäksi. Kun he yllättäen kohtaavat uudelleen matkalla samoihin häihin Australiaan, he joutuvat toimimaan kuten ketkä tahansa kaksi kypsää aikuista: teeskentelemään olevansa pari.'
        //     },
            
        //     {
        //         elokuva: 'Kuolleet lehdet', 
        //         ohjaaja: 'Aki Kaurismäki', 
        //         ingressi: 'Kuolleet lehdet kertoo kahden yksinäisen, sattumalta Helsingin yössä toisensa kohtaavan ihmisen (Alma Pöysti ja Jussi Vatanen) yrityksestä löytää elämänsä ensimmäinen, ainoa ja viimeinen rakkaus. Heidän tietään kohti tätä kunnioitettavaa päämäärää varjostavat miehen alkoholismi, kadonneet puhelinnumerot, tietämättömyys toistensa nimistä tai osoitteista ja elämän yleinen taipumus asettaa esteitä onneaan etsivien tielle. Tämä lempeä tragikomedia on jo kadonneeksi luultu neljäs osa Aki Kaurismäen työläistrilogiaan (Varjoja paratiisissa, Ariel ja Tulitikkutehtaan tyttö).'
        //     },

        //     {
        //         elokva: 'Poor Things', 
        //         ohjaaja: 'Yorgos Lanthimos', 
        //         ingressi: 'Elokuvantekijä Yorgos Lanthimos ja tuottaja Emma Stone tuovat valkokankaalle mielikuvituksellisen tarinan Bella Baxterin (Stone) uskomattomasta evoluutiosta. Bella on nuori nainen, jonka nerokas mutta omintakeinen tiedemies tri Godwin Baxter (Willem Dafoe) herättää henkiin. Aluksi Bella on innokas opettelemaan elämää Baxterin siipien suojassa. Elämänjanossaan hän kuitenkin karkaa sliipatun ja paheellisen lakimiehen Duncan Wedderburnin (Mark Ruffalo) mukana myrskyisälle matkalle halki mantereiden. Sen myötä aikansa ennakkoluulot karistaneesta Bellasta kasvaa vankkumaton vapauden ja tasa-arvon puolustaja.'
        //     }
        // ]);

        // Tiedon muutos
        //return collection.updateOne({_id: new ObjectID("65e580093d19884b641cc6ef")}, {$set: {ohjaaja: 'Anastasia Tomar'} });

        // Tiedon poisto
        return collection.deleteOne({_id: new ObjectID("65e5a3d3d3a3dd45578619a4")});
    })
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log("Yhteysvirhe", err);
    })