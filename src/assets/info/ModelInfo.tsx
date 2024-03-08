const ModelInfo:any = {
    'Allez': {
        'colors' : {
            'Smoke':['images/Bikes/Allez/Smoke0.webp', 'images/Bikes/Allez/Smoke1.webp'],
            'Lagoon Blue':['images/Bikes/Allez/Lagoon0.webp', 'images/Bikes/Allez/Lagoon1.webp'],
            'Maroon': ['images/Bikes/Allez/Maroon0.webp', 'images/Bikes/Allez/Maroon1.webp']},
        'sizes' : [49, 52, 54, 56, 58, 61],
        'trims' : {
            'Base': {'cost': 1200.00,
                'stem': '3D-forged alloy, 31.8mm, 7-degree rise',
                'seatpost': 'Alloy, 2-bolt Clamp, 12mm offset, 27.2mm, anti-corrosion hardware',
                'saddle': 'Body Geometry Bridge Saddle, steel rails',
                'handlebars': 'Specialized Shallow Drop, 70x125mm, 31.8mm clamp',
                'shiftlevers': 'Shimano Claris 2000, 8-speed',
                'crankset': 'Shimano Claris R200 - 50/34t',
                'derailleurs': 'Shimano Claris, 8-speed',
                'cassette': 'SunRace, 8-speed, 11-32t',
                'brakes': 'Tektro MD-550 Mechanical Disc - 160mm rotor',
                'wheels': 'Axis Sport Disc',
                'tires': 'Specialized Roadsport, 700X30c',
                'frame': 'Specialized E5 Premium Aluminum, flat mount disc, rack and fender eyelets, fully manipulated tubing w/ SmoothWelds, internal cable routing, threaded BB, 12x142mm thru-axle',
                'fork': 'Specialized FACT full carbon, flat mount disc, 1-1/8" to 1-3/8" taper, fender eyelets, 12x100mm thru-axle',
            },
            'Elite': {
                'cost': 1700.00,
                'stem': '3D-forged alloy, 31.8mm, 7-degree rise',
                'seatpost': 'Alloy, 2-bolt Clamp, 12mm offset, 27.2mm, anti-corrosion hardware',
                'saddle': 'Body Geometry Bridge Saddle, steel rails',
                'handlebars': 'Specialized Shallow Drop, 70x125mm, 31.8mm clamp',
                'shiftlevers': 'SRAM Rival 22',
                'crankset': 'Praxis Alba',
                'derailleurs': 'SRAM Rival 22, 11-speed',
                'cassette': 'SunRace, 11-speed, 11-32t',
                'brakes': 'Axis 1.0 caliper',
                'wheels': 'DT R460, sealed cartridge hubs, 14g spokes',
                'tires': 'RoadSport, 700x26mm',
                'frame': 'Specialized E5 Premium Aluminum, fully manipulated tubing w/ SmoothWelds, 1-1/8"- 1-3/8" tapered head tube, internal cable routing, threaded BB, 130mm spacing',
                'fork': 'Specialized FACT carbon, 1-1/8" to 1-3/8" taper, fender eyelets',},
            'Sport': {
                'cost': 1800.00,
                'stem': '3D-forged alloy, 31.8mm, 7-degree rise',
                'seatpost': 'Alloy, 2-bolt Clamp, 12mm offset, 27.2mm, anti-corrosion hardware',
                'saddle': 'Body Geometry Bridge Saddle, steel rails',
                'handlebars': 'Specialized Shallow Drop, 70x125mm, 31.8mm clamp',
                'shiftlevers': 'Shimano Tiagra Disc 4720, 10-speed',
                'crankset': 'Praxis Alba - 50/34t',
                'derailleurs': 'Shimano Tiagra, 10-speed',
                'cassette': 'Sunrace, 10-speed, 11-32t',
                'brakes': 'Shimano Tiagra, Hydraulic disc - 160mm rotor',
                'wheels': 'Axis Sport Disc',
                'tires': 'Specialized Roadsport, 700X30c',
                'frame': 'Specialized E5 Premium Aluminum, flat mount disc, rack and fender eyelets, fully manipulated tubing w/ SmoothWelds, internal cable routing, threaded BB, 12x142mm thru-axle',
                'fork': 'Specialized FACT full carbon, flat mount disc, 1-1/8" to 1-3/8" taper, fender eyelets, 12x100mm thru-axle',},
            'Sport Comp': {
                'cost': 3000.00,
                'stem': '3D-forged alloy, 31.8mm, 7-degree rise',
                'seatpost': '2021 S-Works Tarmac Carbon seat post, FACT Carbon, Di2 Compatible, 20mm offset',
                'saddle': 'Body Geometry Bridge Saddle, steel rails',
                'handlebars': 'Specialized Shallow Drop, 70x125mm, 31.8mm clamp',
                'shiftlevers': 'Shimano 105 R7020, hydraulic disc',
                'crankset': 'Shimano 105 R7000, HollowTech 2, 11-speed',
                'derailleurs': 'Shimano 105 R7000 GS, medium cage, 11-speed',
                'cassette': 'Shimano 105, 11-speed, 11-28t',
                'brakes': 'Shimano 105, Hydraulic disc',
                'wheels': 'DT Swiss R470 rim 12mmx142mm, 20mm internal width, tubeless ready, 24h, Specialized full sealed bearing thru axle hub, centerlock disc, HG alloy freehub body, DT Swiss Champion 14G stainless steel spokes, DT Swiss brass nipples.',
                'tires': 'Turbo Pro, 60 TPI, folding bead, BlackBelt protection, 700x26mm',
                'frame': 'Specialized E5 Premium Aluminum, flat mount disc, rack and fender eyelets, fully manipulated tubing w/ SmoothWelds, internal cable routing, threaded BB, 12x142mm thru-axle',
                'fork': 'Specialized FACT full carbon, flat mount disc, 1-1/8" to 1-3/8" taper, fender eyelets, 12x100mm thru-axle',},
            'Sprint LTD': {
                'cost': 3500.00,
                'stem': 'Specialized Pro SL, alloy, 4-bolt',
                'seatpost': '2021 S-Works Tarmac Carbon seat post, FACT Carbon, 20mm offset',
                'saddle': 'Body Geometry Bridge Saddle, steel rails',
                'handlebars': 'Specialized Shallow Drop, 70x125mm, 31.8mm clamp',
                'shiftlevers': 'Shimano 105 Di2 ST-R7170, 12-speed',
                'crankset': 'Shimano 105, 12-speed',
                'derailleurs': 'Shimano 105 Di2 R7170, 12-speed',
                'cassette': 'Shimano 105, 12-speed, 11-34t',
                'brakes': 'Shimano 105, Hydraulic disc',
                'wheels': 'DT Swiss R470 rim, 20mm internal width, tubeless ready, 24h, Specialized full sealed bearing thru axle hub, centerlock disc, alloy freehub body, DT Swiss Champion 14G stainless steel spokes, DT Swiss brass nipples.',
                'tires': 'Turbo Pro, 60 TPI, folding bead, BlackBelt protection, 700x26mm',
                'frame': 'Specialized E5 Premium Aluminum, flat mount disc, rack and fender eyelets, fully manipulated tubing w/ SmoothWelds, internal cable routing, threaded BB, 12x142mm thru-axle',
                'fork': 'Specialized FACT full carbon, flat mount disc, 1-1/8" to 1-3/8" taper, fender eyelets, 12x100mm thru-axle',},
        },
        'descriptions': [`Four decades after the first Specialized Allez hit the road, the new Allez is the best yet. Lightest in its class,* it delivers more confidence, versatility, and performance than ever before – to more riders than ever before. Whether you’re looking for premium alloy, want a bike for weekend rides and fast commutes, or if you’re just beginning your road journey, performance road starts with Allez.`,
        `LIGHTEST IN CLASS: Starting with premium butted and double-butted E5 alloy, the Allez frame tips the scales at just 1,375** grams for a quick and nimble feel on the road. Plus, the full carbon fork reduces weight even more (no hidden alloy steer tube here) while helping smooth out your ride. And with modern, thoughtful build choices, it’s no surprise the Allez is also the lightest in its class.`,
        `INCREDIBLE CONFIDENCE: This premium E5 alloy frame is light, fast, durable, and, did we mention, gorgeous? The excellent stiffness-to-weight ratio coupled with the unmatched stopping power of all-weather dual-piston disc brakes delivers ultimate confidence at any speed. Plus, we’ve used the legendary Roubaix bike's endurance geometry to deliver unrivaled comfort for long miles and stable handling while ensuring the Allez can still dissect a winding road like a pure race bike.`,
        `VERSATILITY and PERFORMANCE: Just as capable of getting you to work or class, as it is checking off your local KOM or weekend group ride, racks and fender mounts ensure the Allez is versatile enough for whatever road you take it on. With tire clearance up to a beefy 35 mm (32 mm with Fenders), you’ll be ready for the roughest roads and even light gravel. If those roads get steep, Allez has a wide gearing range to keep you comfortably spinning so you can ride efficiently.`]
    },
    'Tarmac': {
        'colors' : {
            'Ghost Pearl':['images/Bikes/Tarmac/GhostPearl0.webp', 'images/Bikes/Tarmac/GhostPearl1.webp'],
            'Black':['images/Bikes/Tarmac/Black0.webp', 'images/Bikes/Tarmac/Black1.webp'],
            'Pine Green': ['images/Bikes/Tarmac/PineGreen0.webp', 'images/Bikes/Tarmac/PineGreen1.webp']},
        'sizes' : [49, 52, 54, 56, 58, 61],
        'trims' : {
            'SL6': {'cost': 2500.00,
                'stem': 'Specialized, 3D-forged alloy, 4-bolt, 7-degree rise',
                'seatpost': 'Carbon, single-bolt, 27.2mm',
                'saddle': 'Body Geometry Power Sport, steel rails',
                'handlebars': 'Specialized Shallow Drop, 6061, 70x125mm, 31.8mm clamp',

                'shiftlevers': 'Shimano Tiagra Disc 4720, 10-speed',
                'crankset': 'Shimano Tiagra 4700, 10-speed',
                'derailleurs': 'Shimano Tiagra, 10-speed',
                'cassette': 'Shimano, 10-speed, 11-32t',

                'brakes': 'Shimano Tiagra, Hydraulic disc - 160mm rotor',

                'wheels': 'Axis Sport Disc',
                'tires': 'Turbo Pro, 60 TPI, folding bead, BlackBelt protection, 700x26mm',

                'frame': 'Tarmac SL6, FACT 9r carbon, Rider-First Engineered™, threaded BB, clean routing, 12x142mm thru-axle, flat-mount disc',
                'fork': 'FACT carbon, 12x100mm thru-axle, flat-mount disc',},
            'SL6 Sport': {'cost': 3500.00,
                'stem': 'Specialized, 3D-forged alloy, 4-bolt, 7-degree rise',
                'seatpost': 'Carbon, single-bolt, 27.2mm',
                'saddle': 'Body Geometry Power Sport, steel rails',
                'handlebars': 'Specialized Shallow Drop, 6061, 70x125mm, 31.8mm clamp',

                'shiftlevers': 'Shimano 105 R7020, hydraulic disc',
                'crankset': 'Shimano 105 R7000, HollowTech 2, 11-speed',
                'derailleurs': 'Shimano 105 R7000-GS, medium cage',
                'cassette': 'Shimano 105 R7000, 11-speed, 11-30t',

                'brakes': 'Shimano 105, Hydraulic disc',

                'wheels': 'DT Swiss R470 rim, 20mm internal width, tubeless ready, 24h, Specialized full sealed bearing thru axle hub, centerlock disc, DT Swiss Champion 14G stainless steel spokes, DT Swiss brass nipples.',
                'tires': 'Turbo Pro, 60 TPI, folding bead, BlackBelt protection, 700x26mm',

                'frame': 'Tarmac SL6, FACT 9r carbon, Rider-First Engineered™, threaded BB, clean routing, 12x142mm thru-axle, flat-mount disc',
                'fork': 'FACT carbon, 12x100mm thru-axle, flat-mount disc',},
            'Sl7 Sport': {'cost': 3800.00,
                'stem': 'Tarmac integrated stem, 6-degree',
                'seatpost': '2021 S-Works Tarmac Carbon seat post, FACT Carbon, 20mm offset',
                'saddle': 'Body Geometry Power Sport, steel rails',
                'handlebars': 'Specialized Shallow Drop, 6061, 70x125mm, 31.8mm clamp',

                'shiftlevers': 'Shimano 105, 12 speed Mechanical',
                'crankset': 'Shimano 105, 12-speed',
                'derailleurs': 'Shimano 105, 12 speed Mechanical',
                'cassette': 'Shimano 105, 12-speed, 11-34t',

                'brakes': 'Shimano 105, Hydraulic Disc',

                'wheels': 'DT R470 Disc',
                'tires': 'Turbo Pro, 700x26',

                'frame': 'Tarmac SL6, FACT 9r carbon, Rider-First Engineered™, threaded BB, clean routing, 12x142mm thru-axle, flat-mount disc',
                'fork': 'FACT carbon, 12x100mm thru-axle, flat-mount disc',},
            'SL7 Expert': {'cost': 6500.00,
                'stem': 'Tarmac integrated stem, 6-degree',
                'seatpost': '2021 S-Works Tarmac Carbon seat post, FACT Carbon, 20mm offset',
                'saddle': 'Body Geometry Power Sport, steel rails',
                'handlebars': 'Specialized Shallow Drop, 6061, 70x125mm, 31.8mm clamp',

                'shiftlevers': 'SRAM Rival AXS',
                'crankset': 'SRAM Rival AXS with Power',
                'derailleurs': 'SRAM Rival eTAP AXS, Max 36T',
                'cassette': 'SRAM XG 1250 10-36',

                'brakes': 'SRAM Rival, hydraulic disc',

                'wheels': 'Roval C38, 21mm internal width carbon rim',
                'tires': 'S-Works Turbo, 120 TPI, folding bead, BlackBelt protection, 700x26mm',

                'frame': 'Tarmac SL6, FACT 9r carbon, Rider-First Engineered™, threaded BB, clean routing, 12x142mm thru-axle, flat-mount disc',
                'fork': 'FACT carbon, 12x100mm thru-axle, flat-mount disc',},
            'SL8 Expert': {'cost': 6500.00,
                'stem': 'Tarmac integrated stem, 6-degree',
                'seatpost': 'S-Works Tarmac SL8 Carbon seat post, FACT Carbon, 15mm offset',
                'saddle': 'Body Geometry Power Expert',
                'handlebars': 'Specialized Expert Shallow Drop, alloy, 125mm drop x 75mm reach',

                'shiftlevers': 'SRAM Rival eTap AXS',
                'crankset': 'SRAM Rival with Power Meter',
                'derailleurs': 'SRAM Rival eTap AXS, 12-speed',
                'cassette': 'SRAM Rival, 12-speed, 10-36t',

                'brakes': 'SRAM Rival eTap AXS, hydraulic disc',

                'wheels': 'Roval C38, 21mm internal width carbon rim',
                'tires': 'S-Works Turbo, folding bead, 700x26mm',

                'frame': 'Tarmac SL8 FACT 10r Carbon, Rider First Engineered™, Win Tunnel Engineered, Clean Routing, Threaded BB, 12x142mm thru-axle, flat-mount disc',
                'fork': 'Tarmac SL8 FACT 10r Carbon, 12x100mm thru-axle, flat-mount disc',},
            'SL8 Pro': {'cost': 8500.00,
                'stem': 'Tarmac integrated stem, 6-degree',
                'seatpost': 'S-Works Tarmac SL8 Carbon seat post, FACT Carbon, 15mm offset',
                'saddle': 'Body Geometry Power Pro, hollow titanium rails',
                'handlebars': 'Roval Rapide Handlebar, carbon',

                'shiftlevers': 'Shimano Ultegra Di2 R8170, hydraulic disc',
                'crankset': 'Shimano Ultegra R8100 with 4iiii power meter',
                'derailleurs': 'Shimano Ultegra Di2 R8150, 12-speed',
                'cassette': 'Shimano Ultegra, 12-speed, 11-30t',

                'brakes': 'Shimano Ultegra Di2 R8170, hydraulic disc',

                'wheels': 'Roval Rapide CL II, 21mm internal width carbon rim tubeless ready, Win Tunnel Engineered, DT for Roval 350 hub, DT Swiss Revolution spokes, 51mm depth',
                'tires': 'S-Works Turbo, folding bead, 700x26mm',

                'frame': 'Tarmac SL8 FACT 10r Carbon, Rider First Engineered™, Win Tunnel Engineered, Clean Routing, Threaded BB, 12x142mm thru-axle, flat-mount disc',
                'fork': 'Tarmac SL8 FACT 10r Carbon, 12x100mm thru-axle, flat-mount disc'},
        },
        'descriptions': [`When we developed the Tarmac, we didn't just want it to be fast. We wanted it to be fast everywhere. Long climbs, windy flats, Grand Tour stages, local fondos—we built a race bike to be the most complete out there. How'd we do it? We started with our Rider-First Engineered™ frame with a perfectly-tuned ride quality for every size, added in some serious aero tech that makes it 30 seconds faster than the Tarmac SL5 over 40 kilometers, and then made it 20% lighter. Nothing is lighter, faster, and better handling.`,
        `This Tarmac comes with a reliable spec that includes 10-speed Shimano Tiagra mechanical shifting, quick-stopping hydraulic disc brakes, durable Axis Sport Disc wheels, and our fan-favorite Power saddle.`,
        `For the construction of the Tarmac, we utilized advanced aerospace composite optimization software to revolutionize the construction and layup of our new FACT 9r carbon.`,
        `500 pieces creating 7 different sizes with the same tuned ride–that’s Rider-First Engineered™. We examine every ply of carbon on every frame size to ensure that all of our performance targets come through. To make sure you get the perfect ride, every frame gets a unique layup schedule with different ply arrangements, orientations, quantities of material in specific areas, and sometimes, even exclusive thicknesses and types of carbon itself.`]
    },
    'Roubaix': {
        'colors' : {
            'Smoke':['images/Bikes/Roubaix/Smoke0.webp', 'images/Bikes/Roubaix/Smoke1.webp'],
            'UV Lilac':['images/Bikes/Roubaix/UVLilac0.webp', 'images/Bikes/Roubaix/UVLilac1.webp'],
            'Doppio': ['images/Bikes/Roubaix/Doppio0.webp', 'images/Bikes/Roubaix/Doppio1.webp']},
        'sizes' : [49, 52, 54, 56, 58, 61],
        'trims' : {
            'Base': {
                'cost': 2700.00,
                'stem': 'Future Stem, Comp',
                'seatpost': 'S-Works Pave',
                'saddle': 'Body Geometry Power Sport, steel rails',
                'handlebars': 'Specialized Hover Comp, Alloy, 125mm Drop, 75mm Reach w/Di2 Hole',

                'shiftlevers': 'Shimano Tiagra Disc 4720, 10-speed',
                'crankset': 'Praxis Alba',
                'derailleurs': 'Shimano Tiagra, 10-speed',
                'cassette': 'Shimano Tiagra, 10-speed, 11-34t',

                'brakes': 'Shimano Tiagra Disc 4720',

                'wheels': 'Axis Elite Disc',
                'tires': 'Road Sport, 700x32',
                
                'frame': 'FACT 10R, Rider First Engineered™ (RFE), FreeFoil Shape Library tubes, threaded BB, 12x142mm thru-axle, flat-mount disc',
                'fork': 'Future Shock 1.5 w/ Smooth Boot, 12x100mm, thru-axle, flat-mount disc',},
            'SL8': {'cost': 2800.00,
                'stem': 'Future Stem, Comp',
                'seatpost': 'S-Works Pave',
                'saddle': 'Body Geometry Power Sport, steel rails',
                'handlebars': 'Specialized Hover Comp, Alloy, 125mm Drop, 75mm Reach w/Di2 Hole',

                'shiftlevers': 'Shimano Tiagra 4720, Hydraulic Disc',
                'crankset': 'Shimano Tiagra, 10-Speed',
                'derailleurs': 'Shimano Tiagra, 10-speed',
                'cassette': 'Shimano Tiagra, 10-speed, 11-34t',

                'brakes': 'Shimano Tiagra Hydraulic Disc',

                'wheels': 'Axis Elite Disc',
                'tires': 'Road Sport, 700x32',
                
                'frame': 'FACT 10R, Rider First Engineered™ (RFE), FreeFoil Shape Library tubes, threaded BB, 12x142mm thru-axle, flat-mount disc',
                'fork': 'Future Shock 1.5 w/ Smooth Boot, 12x100mm, thru-axle, flat-mount disc',},
            'Sport': {'cost': 3500.00,
                'stem': 'Future Stem, Comp',
                'seatpost': 'S-Works Pave',
                'saddle': 'Body Geometry Power Sport, steel rails',
                'handlebars': 'Specialized Hover Comp, Alloy, 125mm Drop, 75mm Reach w/Di2 Hole',

                'shiftlevers': 'Shimano 105 R7020, hydraulic disc',
                'crankset': 'Shimano 105 R7000, HollowTech 2, 11-speed',
                'derailleurs': 'Shimano 105 R7000 GS, medium cage, 11-speed',
                'cassette': 'Shimano 105, 11-speed, 11-34t',

                'brakes': 'Shimano 105, Hydraulic disc',

                'wheels': 'DT Swiss R470 rim, 20mm internal width, tubeless ready, 24h, Specialized full sealed bearing thru axle hub, centerlock disc, DT Swiss Champion 14G stainless steel spokes, DT Swiss brass nipples.',
                'tires': 'Specialized Turbo Pro, 700x30mm',
                
                'frame': 'FACT 10R, Rider First Engineered™ (RFE), FreeFoil Shape Library tubes, threaded BB, 12x142mm thru-axle, flat-mount disc',
                'fork': 'Future Shock 1.5 w/ Smooth Boot, 12x100mm, thru-axle, flat-mount disc',},
            'SL8 Expert': {'cost': 6500.00,
                'stem': 'Future Stem Pro',
                'seatpost': 'S-Works Pave',
                'saddle': 'Body Geometry Power Expert',
                'handlebars': 'Specialized Hover Comp, Alloy, 125mm Drop, 75mm Reach w/Di2 Hole',

                'shiftlevers': 'SRAM Rival eTAP AXS, 12-speed',
                'crankset': 'SRAM Rival AXS w/Power, 12-speed',
                'derailleurs': 'SRAM Rival eTAP AXS, 12-speed',
                'cassette': 'SRAM XG 1250, 10-36T',

                'brakes': 'SRAM Rival Hydraulic Disc',

                'wheels': 'Roval Terra C, 25mm inner width carbon rim, 32mm depth, NEW DT 370 Star Ratchet hub, 24h, DT Swiss Comp Race spokes',
                'tires': 'S-Works Mondo 2BR, 700x32c',
                
                'frame': 'FACT 10R, Rider First Engineered™ (RFE), FreeFoil Shape Library tubes, threaded BB, 12x142mm thru-axle, flat-mount disc',
                'fork': 'Future Shock 1.5 w/ Smooth Boot, 12x100mm, thru-axle, flat-mount disc',},
            'SL8 Pro': {'cost': 8500.00,
                'stem': 'Future Stem Pro',
                'seatpost': 'S-Works Pave',
                'saddle': 'Body Geometry Power Pro, hollow titanium rails',
                'handlebars': 'S-Works Carbon Hover Drop 125mm, Reach 75mm, w/Di2 hole',

                'shiftlevers': 'SRAM Rival eTAP AXS, 12-speed',
                'crankset': 'SRAM Rival AXS w/Power, 12-speed',
                'derailleurs': 'SRAM Rival eTAP AXS, 12-speed',
                'cassette': 'SRAM XG 1250, 10-36T',

                'brakes': 'SRAM Force Hydraulic Disc',

                'wheels': 'Roval Terra CL II, 25mm internal width, 32mm depth, 21h, Tubeless ready, DT for Roval 350 hub, Centerlock disc, DT Swiss Aerolite spokes',
                'tires': 'S-Works Mondo 2BR, 700x32c',
                
                'frame': 'FACT 10R, Rider First Engineered™ (RFE), FreeFoil Shape Library tubes, threaded BB, 12x142mm thru-axle, flat-mount disc',
                'fork': 'Future Shock 3.3 w/ Smooth Boot, FACT Carbon 12x100mm, thru-axle, flat-mount disc',},
        },
        'descriptions': [`With seven wins at Paris-Roubaix, our Roubaix has proven that Smoother is Faster. Until this moment, however, smooth has admittedly come with some compromises. But not anymore. The all-new Roubaix now delivers compliance without compromise by introducing a radical new Future Shock 1.5 that gives you more control on rough roads, a new Pavé seatpost that creates our most balanced Roubaix to date, aerodynamics that equal the Tarmac, and a Rider-First Engineered™ frame that’s shed some serious weight. Is it still comfortable? Sure, but don’t call it a comfort bike, because performance was behind every engineering decision we made. This is the new Roubaix.`,
        `This Roubaix provides a tremendous value, but like the frame itself, this value doesn’t come with any compromises. We spec’d it with Shimano’s Tiagra 10-speed group for its crisp shifts and powerful hydraulic disc brakes, as well as reliable Axis Elite Disc wheels, a Praxis Alba crankset, the all-new S-Works Pavé seatpost, 32mm RoadSport tires, and our fan-favorite Power Sport saddle.`,
        `The new frame delivers compliance without compromise via the perfect balance of aerodynamics, light overall weight via a FACT 10r carbon construction, compliance, and Rider-First Engineering. With tube shapes that were born in our FreeFoil Shape Library and validated in the Win Tunnel, the new Roubaix is more aero than the Tarmac SL6. Meanwhile, to ensure the weight and ride quality, we turned to a Rider-First Engineered™ design to deliver optimal stiffness and compliance across all sizes, from 44 to 64cm. Of course, the frame has shed some serious weight in the process. And to prep you for your own Hell of the North, we’ve made room for 33mm tires.`,
        `To go along with the new frame, we’ve also developed a totally-new S-Works Pavé seatpost. Not only is it the first compliant seatpost that’s also aerodynamic, it does so without any additional weight or finicky contraptions. Starting with the same D-shape design found on the Tarmac, we took its compliance a step further by building additional flex into the upper and developing a new drop-clamp design in the frame. This provides plenty of compliance, while staying perfectly balanced with the front-end, so you get a smooth, balanced ride no matter how rough the road.`]
    },
    'Diverge': {
        'colors' : {
            'Birch':['images/Bikes/Diverge/Birch0.webp', 'images/Bikes/Diverge/Birch1.webp'],
            'Redwood':['images/Bikes/Diverge/Redwood0.webp', 'images/Bikes/Diverge/Redwood1.webp'],
            'Midnight Shadow': ['images/Bikes/Diverge/MidnightShadow0.webp', 'images/Bikes/Diverge/MidnightShadow1.webp']},
        'sizes' : [49, 52, 54, 56, 58, 61],
        'trims' : {
            'E5': {
                'cost': 1300.00,
                'stem': '3D-forged alloy, 31.8mm, 7-degree rise',
                'seatpost': 'Alloy, 2-bolt Clamp, 12mm offset, 27.2mm, anti-corrosion hardware',
                'saddle': 'Body Geometry Bridge Saddle, steel rails',
                'handlebars': 'Specialized Shallow Drop, 6061, 70x125mm, 31.8mm clamp',

                'shiftlevers': 'Shimano Claris 2000, 8-speed',
                'crankset': 'Shimano Claris R200',
                'derailleurs': 'Shimano Claris, 8-speed',
                'cassette': 'SunRace, 8-speed, 11-34t',

                'brakes': 'Tektro Mira, flat-mount, mechanical disc',

                'wheels': 'AXIS Elite Disc',
                'tires': 'Specialized Pathfinder Sport, 700x38c',
                
                'frame': 'Specialized Diverge E5 Premium Aluminum, threaded BB, internal routing, 12x142mm thru-axle, flat-mount disc',
                'fork': 'FACT carbon, full carbon steerer, 12x100 mm thru-axle, flat-mount disc',},
            'Elite E5': {'cost': 2000.00,
                'stem': '3D-forged alloy, 31.8mm, 7-degree rise',
                'seatpost': 'Alloy, 2-bolt Clamp, 12mm offset, 27.2mm, anti-corrosion hardware',
                'saddle': 'Body Geometry Bridge Saddle, steel rails',
                'handlebars': 'Specialized Shallow Drop, 6061, 70x125mm, 31.8mm clamp',

                'shiftlevers': 'Shimano GRX RX400 hydraulic brake levers, 2x10 speed mechanical shifting',
                'crankset': 'Shimano GRX RX600',
                'derailleurs': 'Shimano GRX RX400, 10-speed',
                'cassette': 'Shimano GRX RX600',

                'brakes': 'Shimano GRX RX400, Hydraulic disc',

                'wheels': 'AXIS Elite Disc',
                'tires': 'Specialized Pathfinder Sport, 700x38c',
                
                'frame': 'Specialized Diverge E5 Premium Aluminum, threaded BB, internal routing, 12x142mm thru-axle, flat-mount disc',
                'fork': 'FACT carbon, full carbon steerer, 12x100 mm thru-axle, flat-mount disc',},
            'Comp E5': {'cost': 2500.00,
                'stem': '3D-forged alloy, 31.8mm, 7-degree rise',
                'seatpost': 'Alloy, 2-bolt Clamp, 12mm offset, 27.2mm, anti-corrosion hardware',
                'saddle': 'Body Geometry Bridge Saddle, steel rails',
                'handlebars': 'Specialized Shallow Drop, 6061, 70x125mm, 31.8mm clamp',

                'shiftlevers': 'SRAM Apex, hydraulic',
                'crankset': 'SRAM Apex 1x',
                'derailleurs': 'SRAM Apex 1, long cage, 11-speed',
                'cassette': 'Sunrace, 11-speed, alloy spider, 11-42t',

                'brakes': 'SRAM Apex, hydraulic disc, 160mm G2 CenterLine rotor',

                'wheels': 'AXIS Elite Disc',
                'tires': 'Specialized Pathfinder Sport, 700x38c',
                
                'frame': 'Specialized Diverge E5 Premium Aluminum, threaded BB, internal routing, 12x142mm thru-axle, flat-mount disc',
                'fork': 'Future Shock 1.5 w/Smooth Boot, FACT carbon, 12x100 mm thru-axle, flat-mount',},
            'Sport Carbon': {'cost': 3000.00,
                'stem': 'Future Stem, Comp',
                'seatpost': 'Alloy, 2-bolt Clamp, 12mm offset, 27.2mm, anti-corrosion hardware',
                'saddle': 'Body Geometry Bridge Saddle, steel rails',
                'handlebars': 'Specialized Adventure Gear Hover, 103mm drop x 70mm reach x 12º flare',

                'shiftlevers': 'Shimano GRX RX610, 2x12-speed',
                'crankset': 'Shimano GRX RX610',
                'derailleurs': 'Shimano GRX RX820, 12-speed',
                'cassette': 'Shimano 105 12-speed 11-36',

                'brakes': 'Shimano GRX RX400',

                'wheels': 'DT Swiss G540 rim, 24mm internal width, tubeless ready, 24h, Specialized full sealed bearing thru axle hub, centerlock disc, DT Swiss Champion 14G stainless steel spokes, DT Swiss brass nipples',
                'tires': 'Pathfinder Pro 2BR, Tan sidewall, 700x42',
                
                'frame': 'Specialized Diverge FACT 8r carbon, Future Shock suspension, threaded BB, internal routing, 12x142mm thru-axle, flat-mount disc',
                'fork': 'Future Shock 1.5 w/Smooth Boot, FACT carbon, 12x100 mm thru-axle, flat-mount',},
            'Comp Carbon': {'cost': 4000.00,
                'stem': 'Future Stem, Comp',
                'seatpost': 'Roval Terra Carbon Seat Post, 20mm Offset',
                'saddle': 'Body Geometry Bridge Saddle, steel rails',
                'handlebars': 'Specialized Adventure Gear Hover, 103mm drop x 70mm reach x 12º flare',

                'shiftlevers': 'SRAM Force eTap AXS',
                'crankset': 'SRAM Apex DUB Wide',
                'derailleurs': 'SRAM Apex eTAP AXS, hydraulic disc',
                'cassette': 'SRAM PG1210, 12-Speed, 11-50t',

                'brakes': 'SRAM Apex eTAP AXS, hydraulic disc',

                'wheels': 'DT Swiss G540 rim, 24mm internal width, tubeless ready, 24h, Specialized full sealed bearing thru axle hub, centerlock disc, DT Swiss Champion 14G stainless steel spokes, DT Swiss brass nipples',
                'tires': 'Pathfinder Pro 2BR, Tan sidewall, 700x42',
                
                'frame': 'Specialized Diverge FACT 9r carbon, SWAT™ Door integration, Future Shock suspension, threaded BB, internal routing, 12x142mm thru-axle, flat-mount disc',
                'fork': 'Future Shock 2.0 w/ Smooth Boot, 12x100mm thru-axle, flat-mount disc',},
        },
        'descriptions': [`Whether your goal is to escape on gravel back roads, far from cars and crowds, toe the start line at your first gravel race, or simply get the most versatile bike on the road or dirt, no bike is better than the new Diverge. It's quite simply the fastest, most capable - and just maybe the most fun - alloy bike we've ever made, delivering a ride that's quick and lively, but stable and confidence inspiring when the terrain gets rough. With all-new gravel geometry and category leading tire clearance, the new Diverge represents everything we've learned over more than 40 years of riding road, gravel and dirt. The Diverge writes an entirely new chapter in the gravel bike category, so you can dream up entirely new rides. It's the ultimate getaway vehicle.`,
        `With a premium E5 alloy frame and a full carbon FACT fork the Diverge E5 delivers a fast, confident and comfortable ride on road, in the dirt, and over thick gravel. Shimano’s Claris 2x8 group gives a wide range of gears for any terrain, while Axis Elite alloy wheels and Pathfinder Sport 38mm tires provide an efficient ride on pavement with the versatility for hard pack dirt riding.`,
        `We tossed gravel geometry ‘status-quo’ out the window. The new Diverge has the most progressive geometry we’ve ever created for a drop bar bike, giving riders a capable and stable bike in the dirt, that still feels responsive and nimble on the road. We’ve increased the frame’s reach, introduced a slacker head tube and a longer offset fork. All this creates incredible confidence with a planted feeling in the dirt, while spec’ing shorter stems keeps the overall cockpit length the same and the steering lively. We’ve kept the bike’s BB low to increase stability, but high enough to utilize with 650b wheels if that’s your jam.`,
        `Our Premium E5 Aluminum frame provides a stiff, light, and durable platform. When mated to our full carbon FACT fork, the Diverge Base E5 becomes a light, lively and versatile bike ready to attack any surface.`]
    },
    'Crux': {
        'colors' : {
            'Gloss Vivid Pink':['images/Bikes/Crux/GlossVividPink0.webp', 'images/Bikes/Crux/GlossVividPink1.webp'],
            'Satin Taupe': ['images/Bikes/Crux/SatinTaupe0.webp', 'images/Bikes/Crux/SatinTaupe1.webp']},
        'sizes' : [49, 52, 54, 56, 58, 61],
        'trims' : {
            'Comp': {
                'cost': 4000.00,
                'stem': 'Specialized Alloy, 31.8mm, 7-degree rise',
                'seatpost': 'Roval Terra Carbon Seat Post, 20mm Offset',
                'saddle': 'Body Geometry Power Sport, steel rails',
                'handlebars': 'Specialized Adventure Gear, 118.9mm drop x 70mm reach x 12º flare',

                'shiftlevers': 'SRAM Rival',
                'crankset': 'SRAM Rival 1x',
                'derailleurs': 'SRAM Rival 1, long cage',
                'cassette': 'SunRace, 11-speed, 11-42t',

                'brakes': 'SRAM Rival, hydraulic disc',

                'wheels': 'DT Swiss G540 rim, 24mm internal width, tubeless ready, 24h, Specialized full sealed bearing thru axle hub, centerlock disc, DT Swiss Champion 14G stainless steel spokes, DT Swiss brass nipples',
                'tires': 'Pathfinder Pro 2BR, 700x38',
                
                'frame': 'Crux FACT 10r Carbon, Rider First Engineered™, Threaded BB, 12x142mm thru-axle, flat-mount disc',
                'fork': 'FACT 12R Carbon, 12x100mm thru-axle, flat-mount disc',},
            'Expert': {'cost': 6200.00,
                'stem': 'Specialized Pro SL, alloy, 4-bolt, 6-degree rise',
                'seatpost': 'Roval Terra Carbon Seat Post, 20mm Offset',
                'saddle': 'Body Geometry Power Expert, titanium rails',
                'handlebars': 'Specialized Adventure Gear, 118.9mm drop x 70mm reach x 12º flare',

                'shiftlevers': 'SRAM Rival eTAP AXS',
                'crankset': 'SRAM Rival 1x',
                'derailleurs': 'SRAM Rival XPLR eTap AXS',
                'cassette': 'SRAM XPLR, XG-1251, 12-speed, 10-44t',

                'brakes': 'SRAM Rival eTAP AXS, hydraulic disc',

                'wheels': 'Roval Terra C, 25mm inner width carbon rim, 32mm depth, NEW DT 370 hub, 24h, DT Swiss Comp Race spokes',
                'tires': 'Pathfinder Pro 2BR, Tan Sidewall, 700x38',
                
                'frame': 'Crux FACT 10r Carbon, Rider First Engineered™, Threaded BB, 12x142mm thru-axle, flat-mount disc',
                'fork': 'FACT 12R Carbon, 12x100mm thru-axle, flat-mount disc',},
            'Pro': {'cost': 8200.00,
                'stem': 'Specialized Pro SL, alloy, 4-bolt, 6-degree rise',
                'seatpost': 'Roval Terra Carbon Seat Post, 20mm Offset',
                'saddle': 'Body Geometry Power Expert, titanium rails',
                'handlebars': 'Roval Terra, carbon, 103mm drop x 70mm reach x 12º flare',

                'shiftlevers': 'SRAM Rival eTAP AXS',
                'crankset': 'SRAM Rival 1x',
                'derailleurs': 'SRAM Rival XPLR eTap AXS',
                'cassette': 'SRAM XPLR, XG-1251, 12-speed, 10-44t',

                'brakes': 'SRAM Force eTAP AXS, hydraulic disc',

                'wheels': 'Roval Terra CL Wheel',
                'tires': 'Pathfinder Pro 2BR, 700x38',
                
                'frame': 'Crux FACT 10r Carbon, Rider First Engineered™, Threaded BB, 12x142mm thru-axle, flat-mount disc',
                'fork': 'FACT 12R Carbon, 12x100mm thru-axle, flat-mount disc',},
        },
        'descriptions': [`The Crux is the lightest gravel bike in the world, with the exceptional capability of massive tire clearance and performance gravel geometry. It’s not just the ultimate expression of gravel performance, it’s your one-way ticket to gravel enlightenment.`,
        `This Crux Comp comes spec'd with a reliable and smooth-shifting SRAM Rival 1 hydraulic disc groupset, tough DT G540 Disc wheels, and 2Bliss Ready, 700x38mm Pathfinder Pro tires that hookup over nasty terrain.`,
        `Lightest: 725g S-Works 12r and 825g 10r frames. We took the revolutionary breakthroughs that made Aethos the lightest bike ever and applied them to the Crux. The result? A gravel bike that climbs like a dream, floats over nightmarish terrain, and weighs less than a full bottle in your cage`,
        `Capable: 47c/650b x 2.1” tire clearance. More clearance means more capability. With Diverge-level tire clearance, Crux takes you anywhere you can imagine, at full gas.`]
    },
    'Rockhopper': {
        'colors' : {
            'Tarmac Black':['images/Bikes/Rockhopper/TarmacBlack0.webp', 'images/Bikes/Rockhopper/TarmacBlack1.webp'],
            'Flo Red':['images/Bikes/Rockhopper/FloRed0.webp', 'images/Bikes/Rockhopper/FloRed1.webp'],
            'Cast Blue Metallic': ['images/Bikes/Rockhopper/CastBlueMetallic0.webp', 'images/Bikes/Rockhopper/CastBlueMetallic1.webp']},
        'sizes' : ['XS', 'S', 'M', 'L', 'XL'],
        'trims' : {
            '29': {
                'cost': 650.00,
                'stem': '3D-forged alloy, 31.8mm, 7-degree rise',
                'seatpost': 'Alloy, 2-bolt clamp, 30.9mm',
                'saddle': 'Bridge Sport, Steel rails, 155/143mm',
                'handlebars': 'Stout Mini Rise, alloy, 9-degree backsweep, 15mm rise, 31.8mm',

                'shiftlevers': 'microSHIFT, TS39-8R, 2x8-speed',
                'crankset': 'Stout 1x, forged alloy',
                'derailleurs': 'Microshift Mezzo, 8spd',
                'cassette': 'SunRace, 8-speed, 11-34t',

                'brakes': 'Radius CX7, mechanical disc, 160mm',

                'wheels': 'Specialized alloy, disc only, double-wall, 25mm inner width, 32h',
                'tires': 'Fast Trak Sport, 29x2.35"',
                
                'frame': 'Specialized A1 premium butted alloy, zero-stack head tube, internal cable routing, 135x9mm forged dropouts, chainstay-mounted disc brake, replaceable alloy derailleur hanger, stealth rack mounts, dropper post compatible',
                'fork': 'SR Suntour XCE 29, 28mm stanchions, Rx Tune, coil spring, QR, 90/100mm travel (size-specific), 46mm offset',},
            'Sport': {'cost': 750.00,
                'stem': '3D-forged alloy, 31.8mm, 7-degree rise',
                'seatpost': 'Alloy, 2-bolt clamp, 30.9mm',
                'saddle': 'Bridge Sport, Steel rails, 155/143mm',
                'handlebars': 'Stout Mini Rise, alloy, 9-degree backsweep, 15mm rise, 31.8mm',

                'shiftlevers': 'Shimano CUES SL-U4000-9R,RAPIDFIRE PLUS',
                'crankset': 'Stout 1x, forged alloy',
                'derailleurs': 'SHIMANO REAR DERAILLEUR, RD-U4000, CUES, GS 9-SPEED, TOP NORMAL, SHADOW DESIGN',
                'cassette': 'SHIMANO CUES CS-LG300-9, 9-SPEED, 11-41T',

                'brakes': 'Tektro BR-M275 Hydraulic Disc, 180/160mm',

                'wheels': 'Specialized alloy, disc only, double-wall, 25mm inner width, 32h',
                'tires': 'Fast Trak Sport, 650b/29x2.35"',
                
                'frame': 'Specialized A1 premium butted alloy, zero-stack head tube, internal cable routing, 135x9mm forged dropouts, chainstay-mounted disc brake, replaceable alloy derailleur hanger, stealth rack mounts, dropper post compatible',
                'fork': 'SR Suntour XCE 29, 28mm stanchions, Rx Tune, coil spring, QR, 90/100mm travel (size-specific), 46mm offset',},
            'Comp': {'cost': 950.00,
                'stem': '3D-forged alloy, 31.8mm, 7-degree rise',
                'seatpost': 'Alloy, 2-bolt clamp, 30.9mm',
                'saddle': 'Bridge Sport, Steel rails, 155/143mm',
                'handlebars': 'Stout Mini Rise, alloy, 9-degree backsweep, 15mm rise, 31.8mm',

                'shiftlevers': 'Shimano Deore, RapidFire Plus, 10-speed',
                'crankset': 'Stout 1x, forged alloy',
                'derailleurs': 'Shimano Deore, RD-M5120, 10-speed',
                'cassette': 'Sunrace, 11-46t, 10spd',

                'brakes': 'Shimano BR-MT200, hydraulic disc ,180/160mm',

                'wheels': 'Specialized Alloy, hookless, Tubeless ready, 25mm inner width',
                'tires': 'Fast Trak Sport, 650b/29x2.35"',
                
                'frame': 'Specialized A1 premium butted alloy, zero-stack head tube, internal cable routing, 135x9mm forged dropouts, chainstay-mounted disc brake, replaceable alloy derailleur hanger, stealth rack mounts, dropper post compatible',
                'fork': 'RockShox Judy, Solo Air, Turnkey damper, 46mm offset, QR, 80/90/100mm travel (size-specific), steel steerer',},
            'Expert': {'cost': 1300.00,
                'stem': '3D-forged alloy, 31.8mm, 7-degree rise',
                'seatpost': 'Alloy, 2-bolt clamp, 30.9mm',
                'saddle': 'Bridge Sport, Steel rails, 155/143mm',
                'handlebars': 'Stout Mini Rise, alloy, 9-degree backsweep, 15mm rise, 31.8mm',

                'shiftlevers': 'Shimano Deore M5100, 11-speed',
                'crankset': 'Stout 1x, forged alloy',
                'derailleurs': 'Shimano Deore M5100, SGS, 11-speed',
                'cassette': 'Shimano Deore, 11spd, 11-51t',

                'brakes': 'Shimano BR-MT200, hydraulic disc, 160,180mm',

                'wheels': 'Specialized Alloy, hookless, Tubeless ready, 25mm inner width',
                'tires': 'Ground Control 2BR, 650B/29x2.35, T5',
                
                'frame': 'Specialized A1 premium butted alloy, zero-stack head tube, internal cable routing, 135x9mm forged dropouts, chainstay-mounted disc brake, replaceable alloy derailleur hanger, stealth rack mounts, dropper post compatible',
                'fork': 'RockShox Judy, Solo Air, Turnkey damper, 46mm offset, QR, 80/90/100mm travel (size-specific), steel steerer',},
        },
        'descriptions': [`Better performance. Better value. Better Rockhopper. By tapping the fit and handling advantages of pairing each rider with their ideal wheel size and suspension that works its hardest for everyone thanks to our size-specific Rx Tune, we’ve baked in added performance to the all-new Rockhopper without dialing up the price.`,
        `Shimano and MicroSHIFT team up for drivetrain duties with a robust 2x8 drivetrain that can handle everything you’re throw down while confident braking from Radius CX7 mechanical disc brakes seals the deal of the century.`,
        `A heart of gold, presented in our lightweight yet durable Premium A1 Aluminum, the Rockhopper’s butted aluminum frame features hydroformed top and downtubes in order to keep weight low and strength high, all while providing increased standover clearance, slick internal cable routing and dropper-post compatibility.`,
        `With the goal of making sure that the Rockhopper offers both the best fit and best performance for every person, no matter their measure, we’ve paired each Rockhopper frame size with the optimal wheel size. The result is a Rockhopper to fit every rider and the assurance that every Rockhopper is rolling on the best-handling wheel for its frame size.`]
    },
    'Sumpjumper': {
        'colors' : {
            'Blaze':['images/Bikes/Stumpjumper/Blaze0.webp', 'images/Bikes/Stumpjumper/Blaze1.webp'],
            'Black':['images/Bikes/Stumpjumper/Black0.webp', 'images/Bikes/Stumpjumper/Black1.webp'],
            'White Sage': ['images/Bikes/Stumpjumper/WhiteSage0.webp', 'images/Bikes/Stumpjumper/WhiteSage1.webp']},
        'sizes' : ['XS', 'S', 'M', 'L', 'XL'],
        'trims' : {
            'Alloy': {
                'cost': 2800.00,
                'stem': 'Alloy Trail Stem, 35mm bar bore',
                'seatpost': 'TranzX dropper, 34.9mm, S1: 100mm, S2: 125mm, S3: 150mm. S4-S5: 170mm, S6- 200mm',
                'saddle': 'Body Geometry Bridge Saddle, steel rails',
                'handlebars': 'Specialized, 6061 alloy, 6-degree upsweep, 8-degree backsweep, 30mm rise, 780mm width',

                'shiftlevers': 'SRAM SX Eagle, trigger, 12-speed',
                'crankset': 'SRAM SX Eagle, S1:165mm, S2-S5: 170mm, S6: 175mm',
                'derailleurs': 'SRAM SX Eagle, 12-speed',
                'cassette': 'SRAM PG-1210 Eagle, 11-50t',

                'brakes': 'Tektro Gemini Comp, hydraulic disc, resin pad, 200mm',

                'wheels': 'Double-wall alloy, 27mm internal width, 28h',
                'tires': 'Purgatory, GRID casing, GRIPTON® T7 compound, 29x2.3"',
                
                'frame': 'Alloy chassis and rear-end, asymmetrical design, 29 Trail Geometry, horst pivot BB adjustment, threaded BB, 12x148mm dropouts, sealed cartridge bearing pivots, replaceable derailleur hanger, 130mm of travel',
                'fork': 'RockShox 35 Silver, Solo Air, 44mm offset, rebound adjust, TurnKey lockout, 15x110mm Boost™ Maxle® Lite thru-axle, 140mm of travel',},
            'Comp': {'cost': 5000.00,
                'stem': 'Alloy Trail Stem, 35mm bar bore',
                'seatpost': 'X-Fusion Manic, infinite adjustable, two-bolt head, bottom mount cable routing, remote SLR LE lever, 34.9, S1: 100mm, S2: 125mm, S3: 150mm, S4/S5: 175mm, S6: 190mm',
                'saddle': 'Body Geometry Bridge Saddle, steel rails',
                'handlebars': 'Specialized, 6061 alloy, 6-degree upsweep, 8-degree backsweep, 30mm rise, 780mm width',

                'shiftlevers': 'Shimano SLX, M7100, 12spd',
                'crankset': 'Shimano SLX, S1:165mm, S2-S5: 170mm, S6: 175mm',
                'derailleurs': 'Shimano SLX M7100, SGS, 12-speed',
                'cassette': 'Shimano SLX, CS-M7100, 12-speed, 10-51t',

                'brakes': 'Shimano SLX M7120, 4-piston caliper, hydraulic disc, 200mm',

                'wheels': 'Specialized 29, hookless alloy, 30mm inner width, tubeless ready',
                'tires': 'Purgatory, GRID casing, GRIPTON® T7 compound, 29x2.3"',
                
                'frame': 'FACT 11m carbon chassis and rear-end, asymmetrical design, 29 Trail Geometry, SWAT™ Door integration, flip chip Head Tube/Bottom Bracket adjustment, threaded BB, fully enclosed internal cable routing, 12x148mm dropouts, sealed cartridge bearing pivots, replaceable derailleur hanger, 130mm of travel',
                'fork': 'FOX FLOAT 34 Rhythm, GRIP damper, two position Sweep adjustment, 15x110mm axle, 44mm offset, 140mm of travel',},
            'Evo Expert': {'cost': 6300.00,
                'stem': 'Alloy Trail Stem, 35mm bar bore',
                'seatpost': 'OneUp, Dropper Post-V2, MMX lever, 34.9 (S1:120mm, S2/S3:150mm, S4: 180mm, S5/S6: 210mm)',
                'saddle': 'Bridge Comp, Hollow Cr-mo rails, 155/143mm',
                'handlebars': 'Specialized Trail, 7050 alloy, 8-degree backsweep, 6-degree upsweep, 30mm rise, 800mm, 35mm clamp',

                'shiftlevers': 'SRAM X01 Eagle, trigger, 12-speed',
                'crankset': 'SRAM Descendant 7K, DUB, S1:165mm, S2-S5: 170mm, S6: 175mm',
                'derailleurs': 'Sram X01 Eagle, 12-speed',
                'cassette': 'SRAM XG-1295 Eagle, 10-52t',

                'brakes': 'SRAM Code RS, 4-piston caliper, hydraulic disc, 200mm',

                'wheels': 'Roval Traverse 29 Alloy, 30mm inner width, hand-built, 2Bliss Ready',
                'tires': 'Eliminator, GRID TRAIL casing, GRIPTON® T7 compound, 29x2.3"',
                
                'frame': 'FACT 11m carbon chassis and rear-end, asymmetrical design, 29 Trail Geometry, SWAT™ Door integration, flip chip Head Tube/Bottom Bracket adjustment, threaded BB, fully enclosed internal cable routing, 12x148mm dropouts, sealed cartridge bearing pivots, replaceable derailleur hanger, 130mm of travel',
                'fork': 'FOX FLOAT 36 Performance Elite, GRIP2 damper, 15x110mm, 44mm offset, S1: 150mm of travel, S2-S6: 160mm of travel',},
            'Evo Pro': {'cost': 8600.00,
                'stem': 'Deity, 35.0mm',
                'seatpost': 'Bike Yoke, Revive Max, 34.9 (S1:120mm, S2-S3:150mm, S4-S5: 185mm, S6: 213mm)',
                'saddle': 'Bridge, 155/143mm, Hollow Ti-rails',
                'handlebars': 'Roval Traverse SL Carbon, riser bar, 6-degree upsweep, 8-degree backsweep, 30mm rise, 800mm, 35.0mm',

                'shiftlevers': 'SRAM Eagle AXS Rocker Paddle',
                'crankset': 'SRAM X1 Carbon, DUB, S1:165mm, S2-S5: 170mm, S6: 175mm',
                'derailleurs': 'SRAM X01 Eagle AXS',
                'cassette': 'SRAM XG-1295 Eagle, 10-52t',

                'brakes': 'SRAM Code RSC, 4-piston caliper, hydraulic disc, 200mm HS2',

                'wheels': 'Roval Traverse Carbon 29F/27.5R, hookless carbon, 30mm inner width, hand-built, 2Bliss Ready',
                'tires': 'Eliminator, GRID TRAIL casing, GRIPTON® T7 compound, 2Bliss Ready, 27.5 x 2.3"',
                
                'frame': 'FACT 11m carbon chassis and rear-end, asymmetrical design, 29 Trail Geometry, SWAT™ Door integration, flip chip Head Tube/Bottom Bracket adjustment, threaded BB, fully enclosed internal cable routing, 12x148mm dropouts, sealed cartridge bearing pivots, replaceable derailleur hanger, 130mm of travel',
                'fork': 'FOX FLOAT 36 Performance Elite, GRIP2 damper, 15x110mm, 44mm offset, S1: 150mm of travel, S2-S6: 160mm of travel',},
            'S-Works': {'cost': 11000.00,
                'stem': 'Deity, 35.0mm Bore (S1-S2: 35mm length, S3-S6: 50mm length)',
                'seatpost': 'RockShox Reverb AXS, 30.9, 1X remote, (S1:100mm, S2: 125mm, S3: 150mm, S4-S6: 170mm)',
                'saddle': 'Bridge, 155/143mm, Hollow Ti-rails',
                'handlebars': 'Roval Traverse SL Carbon, riser bar, 6-degree upsweep, 8-degree backsweep, 30mm rise, 800mm, 35.0mm',

                'shiftlevers': 'SRAM Eagle AXS Rocker Paddle',
                'crankset': 'SRAM X1 Carbon, DUB, S1:165mm, S2-S5: 170mm, S6: 175mm',
                'derailleurs': 'SRAM XX1 Eagle AXS',
                'cassette': 'SRAM XG-1295 Eagle, 10-52t',

                'brakes': 'SRAM G2 Ultimate, 4-piston caliper, hydraulic disc, 200mm',

                'wheels': 'Roval Control 240, hookless carbon, 29mm inner width, hand-built, 2Bliss Ready',
                'tires': 'Purgatory, GRID casing, GRIPTON® T7 compound, 29x2.3"',
                
                'frame': 'FACT 11m carbon chassis and rear-end, asymmetrical design, 29 Trail Geometry, SWAT™ Door integration, flip chip Head Tube/Bottom Bracket adjustment, threaded BB, fully enclosed internal cable routing, 12x148mm dropouts, sealed cartridge bearing pivots, replaceable derailleur hanger, 130mm of travel',
                'fork': 'FOX FLOAT 34 Factory, GRIP2 damper, Kashima Coating, 15x110mm, 44mm offset, 140mm of travel',},
        },
        'descriptions': [`The Stumpjumper Alloy brings all-new suspension kinematics and progressive geometry into a full-alloy package that's both lightweight and extremely durable. Outfitted with a no-fuss SRAM SX 12-speed groupset, the Stumpjumper Alloy is your all-access pass for trail adventure.`,
        `THE TRAIL BENCHMARK — When we set out to design the all-new Stumpjumper, we pursued some hefty goals. It had to excel on any kind of trail, for every style of rider. To achieve that, we went after serious weight reduction without sacrificing durability, a stiff, responsive chassis that still rides light and lively, geometry that improves everyone’s riding, and the best suspension kinematics we know how to design. Turns out, you can have your cake and eat it too with the new Stumpjumper.`,
        `THE SWEETEST 130MM OF TRAVEL YOU’LL EVER RIDE — We massaged the kinematics of the Stumpjumper suspension to bring out the very best all-round performance possible in a 130mm package. Countless hours of suspension lab development and field testing created a refined mid-travel ripper that eats big terrain like a gravity fed beast, handles like a dream everywhere, and climbs like it has a motor.`,
        `PROGRESSIVE GEOMETRY — The S-Sizing geometry of the new Stumpjumper hits the progressive sweet spot. It’s long, low and slack, with a short offset fork and a steeper seat tube angle. These numbers combine to make your ride more stable, more carvealicious, more comfortable climbing, more better everywhere. With FlipChip adjustability you’re able to further fine-tune your fit, ensuring that your new Stumpjumper performs flawlessly on whatever terrain you choose.`]
    },
    'Demo': {
        'colors' : {
            'Desert Rose':['images/Bikes/Demo/DesertRose0.webp', 'images/Bikes/Demo/DesertRose1.webp'],
            'Metallic Dark Navy': ['images/Bikes/Demo/MetallicDarkNavy0.webp', 'images/Bikes/Demo/MetallicDarkNavy1.webp']},
        'sizes' : ['XS', 'S', 'M', 'L', 'XL'],
        'trims' : {
            'Expert': {
                'cost': 5600.00,
                'stem': 'Descendant 35mm Direct Mount Stem, 50mm length',
                'seatpost': 'Specialized, 6061 alloy, 2-bolt clamp, 0mm setback, 30.9mm',
                'saddle': 'Body Geometry Henge DH, hollow Cro-Mo rails, 130mm',
                'handlebars': 'Specialized Trail, 7050 alloy, 8-degree backsweep, 6-degree upsweep, 30mm rise, 800mm, 35mm clamp',

                'shiftlevers': 'SRAM GX DH, trigger, 7-speed',
                'crankset': 'DESCENDANT DH, DUB, alloy, Direct mount ring, 165mm',
                'derailleurs': 'SRAM GX DH, 7-speed, trigger',
                'cassette': 'SRAM GX DH, 7-speed, 11-24t',

                'brakes': 'SRAM Code RS, 4-piston caliper, hydraulic disc, 200mm',

                'wheels': 'Roval 29" Alloy DH, 28mm internal width, 28h, tubeless ready',
                'tires': 'Butcher, GRID GRAVITY casing, GRIPTON® T9 compound, 2Bliss Ready, 27.5x2.3"',
                
                'frame': 'M5 alloy, Style-Specific DH Geometry, horst pivot flip chip for 27.5 or 29 rear wheel, BSA threaded BB, full internal cable routing with option for full external brake, 148mm rear spacing, sealed cartridge bearing pivots, replaceable derailleur hanger, 200mm of travel',
                'fork': 'RockShox BoXXer Select 29, DH DebonAir spring, adjustable low-speed compression, adjustable rebound, short crown, 20x110mm thru-axle, 56mm offset, 200mm of travel',},
            'Race': {'cost': 7100.00,
                'stem': 'Renthal Integra35, Direct Mount Stem, 45mm length',
                'seatpost': 'Thomson, alloy, straight, 12-degree clamp',
                'saddle': 'Body Geometry Henge DH, hollow Cro-Mo rails, 130mm',
                'handlebars': 'Renthal Fatbar35, 5-degree upsweep, 7-degree backsweep, 30mm rise, 800mm, 35.0mm',

                'shiftlevers': 'SRAM X01 DH, trigger, 7-speed',
                'crankset': 'SRAM X01 DH, DUB, carbon, Direct mount ring, 165mm',
                'derailleurs': 'SRAM X01 DH, 7-speed, trigger',
                'cassette': 'SRAM X01 DH, 7-speed, 10-24t',

                'brakes': 'Magura MT7, 4-piston caliper, hydraulic disc, 203mm',

                'wheels': 'Roval 29" Alloy DH, 28mm internal width, 28h, tubeless ready',
                'tires': 'Butcher, GRID GRAVITY casing, GRIPTON® T9 compound, 2Bliss Ready, 27.5x2.3"',
                
                'frame': 'M5 alloy, Style-Specific DH Geometry, horst pivot flip chip for 27.5 or 29 rear wheel, BSA threaded BB, full internal cable routing with option for full external brake, 148mm rear spacing, sealed cartridge bearing pivots, replaceable derailleur hanger, 200mm of travel',
                'fork': 'Öhlins DH38 M.1 29, TTX Twin Tube Damping, external low speed rebound adjust, external high and low speed compression adjustment, 20x110mm, 58mm offset, 200mm of travel',},
        },
        'descriptions': [`Pair an irrational appreciation for speed with the unmatched versatility of being able to run a traction-loving 29-inch front wheel and a snappy 27.5-inch rear, and you have the fastest, most capable Demo to date. The Demo Expert adds planted, confident control to the mix with an assist from RockShox’s BoXXer Select 29 fork featuring their DH DebonAir spring and a Super Deluxe Select Coil shock offering external rebound adjustment. Should your riding style or terrain require it, the Demo's adjustable rear end means 29-inch rear wheel compatibility is on deck, ready to deliver.`,
        `SRAM Code RS four-piston brakes front and rear give you the power to slow down with almost telepathic immediacy, while the Demo Expert’s suspension platform injects just the right amount of anti-rise into the kinematics equation to keep your weight low and centered, maximizing rear-wheel traction when you need it most.`,
        `The Demo Expert M5 alloy frame is fully optimized to take advantage of the traction benefits of a 29-inch front wheel and the increased manueverability of a 27.5-inch rear wheel while maintaiining the ability to change your rear wheel size to 29-inch to suit different terrain and riding styles with an adjustable rear end that ensures chainstay length and bottom-bracket height stay dialed no matter the hoop size.`,
        `The Rockshox Super Deluxe Select DH coil shock may be heavy on adjectives, but it’s even heavier on performance, offering external low speed compression and rebound adjustment while the Trunnion mount offers extra bushing overlap for increased durability.`]
    },
    'Epic': {
        'colors' : {
            'Birch':['images/Bikes/Epic/Birch0.webp', 'images/Bikes/Epic/Birch1.webp'],
            'Redwood':['images/Bikes/Epic/Redwood0.webp', 'images/Bikes/Epic/Redwood1.webp'],
            'Midnight Shadow': ['images/Bikes/Epic/MidnightShadow0.webp', 'images/Bikes/Epic/MidnightShadow1.webp']},
        'sizes' : ['XS', 'S', 'M', 'L', 'XL'],
        'trims' : {
            'Hardtail': {
                'cost': 2500.00,
                'stem': '3D-forged alloy, 31.8mm, 7-degree',
                'seatpost': 'Specialized Alloy, Single Bolt, 30.9mm',
                'saddle': 'Body Geometry Power Sport, steel rails',
                'handlebars': 'Specialized Alloy XC minirise, double-butted alloy, 8-degree backsweep, 6-degree upsweep, 10mm rise, 31.8mm',

                'shiftlevers': 'SRAM NX Eagle, trigger, 12-speed',
                'crankset': 'SRAM X1000 Eagle, DUB, 170/175mm 32T',
                'derailleurs': 'SRAM NX Eagle, 12-speed',
                'cassette': 'SRAM NX Eagle, 12-speed, 11-50t',

                'brakes': 'SRAM Level T hydraulic disc, 2-Piston Caliper',

                'wheels': 'Specialized Alloy, Tubeless Ready, 25mm internal width, 28h',
                'tires': 'Specialized Renegade, Control Casing, T5 Compound, 29x2.35',
                
                'frame': 'Specialized FACT 11m, Progressive XC Geometry, Rider-First Engineered™, threaded BB, 12x148mm rear spacing, internal cable routing',
                'fork': 'RockShox Judy Gold, Motion Control damper, Solo Air, 42mm offset, 15x110mm thru-axle, 100mm of travel (XS - 80mm travel)',},
            'Hardtail Comp': {'cost': 3200.00,
                'stem': '3D-forged alloy, 31.8mm, 7-degree',
                'seatpost': 'Specialized Alloy, Single Bolt, 30.9mm',
                'saddle': 'Body Geometry Power Sport, steel rails',
                'handlebars': 'Specialized Alloy Minirise, 10mm rise, 750mm, 31.8mm clamp',

                'shiftlevers': 'SRAM GX Eagle, trigger, 12-speed',
                'crankset': 'SRAM X1 1000 Eagle, DUB, 170/175mm 34T',
                'derailleurs': 'SRAM GX Eagle, 12-speed',
                'cassette': 'Sram XG-1275, 12-speed, 10-52t',

                'brakes': 'SRAM Level TL, 2-piston caliper, hydraulic disc',

                'wheels': 'Specialized Alloy, Tubeless Ready, 25mm internal width, 28h',
                'tires': 'Specialized Renegade, Control Casing, T5 Compound, 29x2.35',
                
                'frame': 'Specialized FACT 11m, Progressive XC Geometry, Rider-First Engineered™, threaded BB, 12x148mm rear spacing, internal cable routing',
                'fork': 'RockShox Judy Gold, Motion Control damper, Solo Air, 42mm offset, 15x110mm thru-axle, 100mm of travel (XS - 80mm travel)',},
            'Hardtail Expert': {'cost': 4500.00,
                'stem': 'Specialized XC, 3D-forged alloy, 4-bolt, 6-degree rise',
                'seatpost': 'Specialized Alloy, Single Bolt, 30.9mm',
                'saddle': 'Body Geometry Power Sport, steel rails',
                'handlebars': 'Specialized Alloy Minirise, 10mm rise, 750mm, 31.8mm clamp',

                'shiftlevers': 'SRAM X01, trigger, 12-speed',
                'crankset': 'SRAM X1 Eagle, DUB, 32T, XS: 165mm, SM: 170mm, M-XL: 175mm',
                'derailleurs': 'Sram X01 Eagle, 12-speed',
                'cassette': 'SRAM XG-1275 Eagle, 12-speed, 10-50t',

                'brakes': 'SRAM Level TL, 2-piston caliper, hydraulic disc',

                'wheels': 'Roval Control Carbon, 25mm internal width, Zero bead hook, Tubeless ready, 28h',
                'tires': 'Fast Trak, Control casing, GRIPTON® compound, 60 TPI, 2Bliss Ready, 29x2.3"',
                
                'frame': 'Specialized FACT 11m, XC Geometry, Rider-First Engineered™, threaded BB, 12x148mm rear spacing, internal cable routing',
                'fork': 'RockShox SID SL BRAIN, Bottom-Adjust Brain damper, Debon Air, 15x110mm, 44mm offset, 100mm Travel (XS-80mm Travel)',},
            'Hardtail Pro': {'cost': 5800.00,
                'stem': 'Specialized XC, 3D-forged alloy, 4-bolt, 6-degree rise',
                'seatpost': 'S-Works FACT carbon, 10mm offset, 30.9mm',
                'saddle': 'Body Geometry Power Expert',
                'handlebars': 'S-Works Carbon XC Mini Rise, 6-degree upsweep, 8-degree backsweep, 10mm rise, 760mm, 31.8mm',

                'shiftlevers': 'SRAM AXS Eagle Controller',
                'crankset': 'SRAM X1 carbon Eagle, Boost™ 148, DUB, 32T, SM: 170mm, M-XL 175mm',
                'derailleurs': 'SRAM X01 Eagle AXS',
                'cassette': 'SRAM XG-1295 Eagle, 12-speed, 10-50t',

                'brakes': 'SRAM Level TLM, 2-piston caliper, hydraulic disc',

                'wheels': 'Roval Control Carbon, 25mm internal width, Zero bead hook, Tubeless ready, 28h',
                'tires': 'Fast Trak, Control casing, GRIPTON® compound, 60 TPI, 2Bliss Ready, 29x2.3"',
                
                'frame': 'Specialized FACT 11m, XC Geometry, Rider-First Engineered™, threaded BB, 12x148mm rear spacing, internal cable routing',
                'fork': 'RockShox SID SL BRAIN, Top-Adjust Brain damper, Debon Air, 15x110mm, 44mm offset, 100mm Travel',},
            'Hardtail S-Works': {'cost': 11000.00,
                'stem': 'Specialized XC, 3D-forged alloy, 4-bolt, 6-degree rise',
                'seatpost': 'S-Works FACT carbon, 10mm offset, 30.9mm',
                'saddle': 'Body Geometry S-Works Power, carbon fiber rails, carbon fiber base',
                'handlebars': 'S-Works Carbon XC Mini Rise, 6-degree upsweep, 8-degree backsweep, 10mm rise, 760mm, 31.8mm',

                'shiftlevers': 'SRAM Eagle AXS Rocker Paddle',
                'crankset': 'SRAM X1 carbon Eagle, Boost™ 148, DUB, 32T, SM: 170mm, M-XL 175mm',
                'derailleurs': 'SRAM XX1 Eagle AXS',
                'cassette': 'Sram XG-1299, 12-Speed, 10-52t',

                'brakes': 'SRAM Level Ultimate, 2-piston caliper, hydraulic disc',

                'wheels': 'Roval Control SL, Carbon offset design, 29mm internal width, 4mm hook width, Tubeless ready, 24h',
                'tires': 'Specialized Renegade, Control Casing, T5 Compound, 29x2.35',
                
                'frame': 'S-Works FACT 12m, Progressive XC Geometry, Rider-First Engineered™, threaded BB, 12x148mm rear spacing, internal cable routing,',
                'fork': 'RockShox SID SL ULTIMATE BRAIN, Top-Adjust Brain damper, Debon Air, 15x110mm, 44mm offset, 100mm Travel',},
        },
        'descriptions': [`You’ve seen the look. The, are-they-really-about-to-ride-that-on-a-hardtail look. Well, get ready to get it a lot more aboard the Epic Hardtail. Fast and light meets confident and capable in a bike that’s been bred to redefine what’s possible on a cross-country speed demon.`,
        `Working towards the lightest bike possible has long been the race within the race, but at what cost? The battle of the grams certainly hasn’t been without its casualties, with hardtail XC race bikes coming to stand for a harsh, twitchy ride at the expense of capability and versatility.`,
        `But who said fatigue from fighting against your own bike makes you any faster? Instead, recognizing that the fastest bike is more than simply the lightest bike, we said out with the jarred-to-death tail, the measure-your-posterior’s-sorrows-by-the-yard tail and in with the avant-garde tail. The ridiculously capable, mystifyingly comfortable, head-shakingly light and all-around fast, Epic Hardtail.`,
        `Sure, we optimized every inch of the Epic Hardtail frame to achieve the lightest production hardtail frame in the world anyway, but we also prioritized our commitment to creating an Epic Hardtail that’s as capable as it is comfortable with aggressive singletrack-inspired geometry, increased tire clearance and a frame obsessively engineered for increased vertical compliance, all while creating a bike that lives and breathes the fundamentals of fast.`]
    },
    'Fuse': {
        'colors' : {
            'Doppio':['images/Bikes/Fuse/Doppio0.webp', 'images/Bikes/Fuse/Doppio1.webp'],
            'Artic Blue':['images/Bikes/Fuse/ArticBlue0.webp', 'images/Bikes/Fuse/ArticBlue1.webp'],
            'Cast Blue': ['images/Bikes/Fuse/CastBlue0.webp', 'images/Bikes/Fuse/CastBlue1.webp'],
            'Terra Cotta': ['images/Bikes/Fuse/TerraCotta0.webp', 'images/Bikes/Fuse/TerraCotta1.webp']},
        'sizes' : ['XS', 'S', 'M', 'L', 'XL'],
        'trims' : {
            '27.5': {
                'cost': 1500.00,
                'stem': 'Stout 3D-forged alloy, 31.8mm, 6-degree rise',
                'seatpost': 'TranzX Dropper, 30.9mm, S: 100mm, M-XL: 120mm',
                'saddle': 'Body Geometry Bridge Saddle, steel rails',
                'handlebars': 'Stout Riser, double-butted alloy, 9-degree backsweep, 5-degree upsweep, 15mm rise, 750mm / 780mm width, 31.8mm',

                'shiftlevers': 'microSHIFT Advent, 9-speed',
                'crankset': 'Stout, forged alloy, 76mm BCD, 30T',
                'derailleurs': 'microSHIFT Advent, 1x9 w/ clutch',
                'cassette': 'microSHIFT Advent, 9-speed, 11-42t',

                'brakes': 'Shimano BR-MT200, hydraulic disc, 180mm',

                'wheels': 'Alloy, disc only, double-wall, 29mm internal width, 28h, tubeless compatible',
                'tires': 'Eliminator, GRID TRAIL casing, GRIPTON® T7 compound, 2Bliss Ready, 27.5 x 2.3"',
                
                'frame': 'Specialized A1 Premium Aluminum, 148mm thru-axle, tapered head tube, internal cable routing',
                'fork': 'X-Fusion MIG 27.5, External Rebound and Compression adjust, coil spring, 46mm Offset, 130mm of travel',},
            'Sport 27.5': {'cost': 2400.00,
                'stem': 'Stout 3D-forged alloy, 31.8mm, 6-degree rise',
                'seatpost': 'TranzX Dropper, 30.9mm, S: 100mm, M-XL: 120mm',
                'saddle': 'Body Geometry Bridge Saddle, steel rails',
                'handlebars': 'Stout Riser, double-butted alloy, 9-degree backsweep, 5-degree upsweep, 15mm rise, 750mm / 780mm width, 31.8mm',

                'shiftlevers': 'SRAM SX Eagle, trigger, 12-speed',
                'crankset': 'SRAM PG-1210 Eagle, 11-50t',
                'derailleurs': 'SRAM SX Eagle, 12-speed',
                'cassette': 'SRAM PG-1210 Eagle, 11-50t',

                'brakes': 'SRAM Level, hydraulic disc, 180/160mm',

                'wheels': 'Alloy, disc only, double-wall, 29mm internal width, 28h, tubeless compatible',
                'tires': 'Eliminator, GRID TRAIL casing, GRIPTON® T7 compound, 2Bliss Ready, 27.5x2.6"',
                
                'frame': 'Specialized A1 Premium Aluminum, 148mm thru-axle, tapered head tube, internal cable routing',
                'fork': 'RockShox Judy Silver TK, air spring, 42mm offset, 130mm of travel',},
            'Expert 29': {'cost': 2900.00,
                'stem': 'Stout 3D-forged alloy, 31.8mm, 6-degree rise',
                'seatpost': 'TranzX Dropper, 34.9mm, XS-S: 100mm, M: 125mm, L-XL: 150mm',
                'saddle': 'Bridge Comp, Hollow Cr-mo rails, 155/143mm',
                'handlebars': 'Stout Riser, double-butted alloy, 9-degree backsweep, 5-degree upsweep, 15mm rise, 750mm / 780mm width, 31.8mm',

                'shiftlevers': 'SRAM SX Eagle, trigger, 12-speed',
                'crankset': 'SRAM, X1 Alloy Eagle, 12-speed, 32T',
                'derailleurs': 'SRAM GX Eagle, 12-speed',
                'cassette': 'SRAM XG-1275, 12-speed, 10-52t',

                'brakes': 'SRAM G2, 4 Piston, 180mm XS-M, 200mm L-XL',

                'wheels': 'Specialized Alloy, Tubeless Ready, 29mm internal width, 28h',
                'tires': 'Eliminator, GRID TRAIL casing, GRIPTON® T7 compound, 2Bliss Ready, 29x2.6"',
                
                'frame': 'Specialized M4 Premium Aluminum, 148mm thru-axle, adjustable dropout, SS compatible, tapered head tube, internal cable routing',
                'fork': 'FOX FLOAT 34 Rhythm, GRIP damper, two position Sweep adjustment, 15x110mm Kabolt axle, 44mm offset, 130mm of travel',},
            'Comp 29': {'cost': 3000.00,
                'stem': 'Stout 3D-forged alloy, 31.8mm, 6-degree rise',
                'seatpost': 'TranzX Dropper, 34.9mm, XS-S: 100mm, M: 125mm, L-XL: 150mm',
                'saddle': 'Bridge Comp, Hollow Cr-mo rails, 155/143mm',
                'handlebars': 'Stout Riser, double-butted alloy, 9-degree backsweep, 5-degree upsweep, 15mm rise, 750mm / 780mm width, 31.8mm',

                'shiftlevers': 'SRAM NX Eagle, trigger, 12-speed',
                'crankset': 'SRAM, X1 Alloy Eagle, 12-speed',
                'derailleurs': 'SRAM NX Eagle, 12-speed',
                'cassette': 'SRAM NX Eagle, 12-speed, 11-50t',

                'brakes': 'SRAM Level TRL, hydraulic disc, 4-piston, 200/180mm',

                'wheels': 'Specialized Alloy, Tubeless Ready, 29mm internal width, 28h',
                'tires': 'Eliminator, GRID TRAIL casing, GRIPTON® T7 compound, 2Bliss Ready, 29x2.6"',
                
                'frame': 'Specialized M4 Premium Aluminum, 148mm thru-axle, adjustable dropout, SS compatible, tapered head tube, internal cable routing',
                'fork': 'RockShox Recon RL, air spring, 46mm offset, 130mm of travel',},
        },
        'descriptions': [`Calm under pressure, yet deft and precise, the Fuse is an entirely different kind of hardtail. Featuring an all-new longer, lower, and rowdier chassis and 27.5x2.3 wheels and tires, the Fuse 27.5 handles rough, sketchy descents and steep, technical climbs with absolute confidence.`,
        `130-millimeters of suspension courtesy of an X-Fusion fork.`,
        `Highlights include hydraulic disc brakes, a dropper post, and single-ring drivetrain.`,
        `Durable 29mm interal width alloy wheelset.`]
    },
    'Sirrus' : {
        'colors' : {
            'Cool Grey': ['images/Bikes/Sirrus/CoolGrey0.webp', 'images/Bikes/Sirrus/CoolGrey1.webp'],
            'Black':['images/Bikes/Sirrus/Black0.webp', 'images/Bikes/Sirrus/Black1.webp'],
            'Sky Blue': ['images/Bikes/Sirrus/SkyBlue0.webp', 'images/Bikes/Sirrus/SkyBlue1.webp'],
            'Fiery Red': ['images/Bikes/Sirrus/FieryRed0.webp', 'images/Bikes/Sirrus/FieryRed1.webp']},
        'sizes' : ['XS', 'S', 'M', 'L', 'XL'],
        'trims' : {
            '1.0': {
                'cost': 650.00,
                'stem': 'Specialized Flowset, integrated, 3D-forged alloy, 4-bolt, 12-degree rise, 31.8mm clamp',
                'seatpost': 'Alloy, 12mm offset, 2-bolt clamp, 27.2mm',
                'saddle': 'Bridge Sport, Steel rails, 155/143mm',
                'handlebars': 'Double-butted alloy, 5-degree backsweep, 25.4mm',

                'shiftlevers': 'microSHIFT TS39 Trigger shift, 7-speed',
                'crankset': 'Forged aluminum arms, 3-piece, 46/30T',
                'derailleurs': 'microSHIFT RD-M26S, 7-speed',
                'cassette': 'SunRace, 7-Speed, 11-34t',

                'brakes': 'V-brake, linear pull',

                'wheels': '700C rim brake, double-wall alloy, 22mm depth, 21mm internal width, rim brake',
                'tires': 'RoadSport, Wire bead, Blackbelt/Endurant Casing, 700x32c',
                
                'frame': 'Specialized A1 Premium Aluminum, Fitness Geometry, Butted tubing, Internal Cable Routing, V-Brake, Quick-Release, Plug + Play rack/fender mounts',
                'fork': 'Hi-Ten steel, V-Brake, Plug + Play fender mounts, low rider rack mounts, quick-release',},
            '2.0': {'cost': 775.00,
                'stem': 'Specialized Flowset, integrated, 3D-forged alloy, 4-bolt, 12-degree rise, 31.8mm clamp',
                'seatpost': 'Alloy, 12mm offset, 2-bolt clamp, 27.2mm',
                'saddle': 'Bridge Sport, Steel rails, 155/143mm',
                'handlebars': 'Double-butted alloy, 5-degree backsweep, 25.4mm',

                'shiftlevers': 'microSHIFT SL-R758 w/indicator',
                'crankset': 'Shimano Tourney, 3-piece, 46/30T',
                'derailleurs': 'microSHIFT RD-M26S, 8-speed',
                'cassette': 'MicroSHIFT H081, 8-speed, 11-32t',

                'brakes': 'Promax F1, hydraulic disc, flat-mount, 160mm',

                'wheels': '700C rim brake, double-wall alloy, 22mm depth, 21mm internal width, rim brake',
                'tires': 'RoadSport, Wire bead, Blackbelt/Endurant Casing, 700x32c',
                
                'frame': 'Specialized A1 Premium Aluminum, Fitness Geometry, Butted tubing, Internal Cable Routing, V-Brake, Quick-Release, Plug + Play rack/fender mounts',
                'fork': 'Hi-Ten steel, V-Brake, Plug + Play fender mounts, low rider rack mounts, quick-release',},
            '3.0': {'cost': 1200.00,
                'stem': 'Specialized, 3D-forged alloy, 4-bolt, 7-degree rise',
                'seatpost': 'Alloy, 12mm offset, 2-bolt clamp, 27.2mm',
                'saddle': 'Bridge Sport, Steel rails, 155/143mm',
                'handlebars': 'Double-butted alloy, 9-degree backsweep, 31.8mm',

                'shiftlevers': 'microSHIFT, 9-speed',
                'crankset': 'Forged aluminum arms, 2-piece, 24mm spindle, 46/30T',
                'derailleurs': 'MicroSHIFT RD-R43M, medium cage',
                'cassette': 'MicroSHIFT H092, 9-speed, 11-34t',

                'brakes': 'Tektro HD-R280, hydraulic disc, resin pads, flat-mount, 160mm',

                'wheels': '700C disc brake, double-wall alloy, 22mm depth, 21mm internal width',
                'tires': 'RoadSport Reflect, Wire bead, Blackbelt/Endurant Casing, 700x32c',
                
                'frame': 'Specialized A1 Premium Aluminum, Fitness Geometry, Butted tubing, Internal Cable Routing, V-Brake, Quick-Release, Plug + Play rack/fender mounts',
                'fork': 'Specialized FACT 9r Carbon, flat-mount disc, quick-release',},
            '4.0': {'cost': 1500.00,
                'stem': 'Future Stem, Comp',
                'seatpost': 'Alloy, 2-bolt, 14mm offset, 27.2mm',
                'saddle': 'Bridge Sport, Steel rails, 155/143mm',
                'handlebars': 'Double-butted alloy, 9-degree backsweep, 31.8mm',

                'shiftlevers': 'MicroSHIFT, 10-speed',
                'crankset': 'Praxis Alba M24, solid forged arms, 6061 outer ring, steel inner ring, 110 BCD, 10-speed',
                'derailleurs': 'MicroSHIFT RD-R55S, short cage',
                'cassette': 'Sunrace CSRS0, 10-speed, 11-28t',

                'brakes': 'Tektro HD-R280, hydraulic disc, resin pads, flat-mount, 160mm',

                'wheels': '700C disc brake, double-wall alloy, 22mm depth, 21mm internal width',
                'tires': 'RoadSport Reflect, Wire bead, Blackbelt/Endurant Casing, 700x32c',
                
                'frame': 'Specialized A1 SL Premium Aluminum, Fitness Geometry, fully manipulated butted tubing, internal cable routing, flat-mount disc, 12x142mm thru-axle, Plug + Play rack/fender mounts',
                'fork': 'Specialized FACT 9r Carbon Monocoque, flat-mount disc, 12x100mm thru-axle, low rider mounts, Plug + Play fender mounts, Future Shock 1.5',},
            '6.0': {'cost': 3000.00,
                'stem': 'Future Stem, Comp',
                'seatpost': 'Roval Terra Carbon Seat Post, 20mm Offset',
                'saddle': 'Bridge Sport, Steel rails, 155/143mm',
                'handlebars': 'Double-butted alloy, 9-degree backsweep, 31.8mm',

                'shiftlevers': 'SRAM GX, trigger, 12-speed',
                'crankset': 'SRAM Rival 1x',
                'derailleurs': 'SRAM GX Eagle, 12-speed',
                'cassette': 'SRAM PG-1230 Eagle, 11-50t',

                'brakes': 'SRAM Level TLM, hydraulic disc, 160mm',

                'wheels': 'DT Swiss R470, 23mm depth, 20mm internal width, 24h',
                'tires': 'Roubaix Pro 2BR, 700x30/32',
                
                'frame': 'Specialized FACT 9r Carbon, Fitness Geometry, 1x Drivetrain, 12x142 thru-axle, internal cable routing, flat-mount disc, Plug + Play rack/fender mounts',
                'fork': 'Specialized FACT 9r Carbon Monocoque, flat-mount disc, 12x100mm thru-axle, low rider mounts, Plug + Play fender mounts, Future Shock 1.5',},
        },
        'descriptions': [`You have places to go, people to see, and fitness goals to achieve. We get it—life moves pretty fast, so it's a good thing we made Sirrus to help you with all of it. Wherever you're heading, Sirrus will take you there. This Sirrus features a reliable set of components that are built to withstand years of daily abuse, like comfortable Body Geometry touchpoints and fuss-free mechanical V-brakes. So, as you push yourself to reach your goals, you'll feel more connected to your bike and know that you have the perfect partner with Sirrus.`,
        `Lightweight A1 Alloy frame with clean internal cable routing delivers a bike that is 1.1lb (.5kg) lighter than previous version.`,
        `Upright position with Body Geometry touchpoints for comfort and control.`,
        `Reflective graphics on frame and tires for maximum visibility.`]
    },

    'Roll': {
        'colors' : {
            'Lagoon Blue':['images/Bikes/Roll/LagoonBlue0.webp', 'images/Bikes/Roll/LagoonBlue1.webp'],
            'Cool Grey':['images/Bikes/Roll/CoolGrey0.webp', 'images/Bikes/Roll/CoolGrey1.webp'],
            'Tarmac Black': ['images/Bikes/Roll/TarmacBlack0.webp', 'images/Bikes/Roll/TarmacBlack1.webp'],
            'Redwood': ['images/Bikes/Roll/Redwood0.webp', 'images/Bikes/Roll/Redwood1.webp']},
        'sizes' : ['XS', 'S', 'M', 'L', 'XL'],
        'trims' : {
            '2.0': {
                'cost': 700.00,
                'stem': '3D-forged alloy, 31.8mm, 7-degree rise',
                'seatpost': 'Alloy, 2-bolt clamp, 27.2mm',
                'saddle': 'Specialized Body Geometry Comfort Gel',
                'handlebars': 'Specialized Roll, 6061 alloy, Double butted, 15-degree backsweep, 136mm rise, 31.8mm',

                'shiftlevers': 'microSHIFT TS39 Trigger shift, 7-speed',
                'crankset': 'Forged aluminum arms, 3-piece, 7 speed',
                'derailleurs': 'microSHIFT RD-M26S, 7-speed',
                'cassette': 'SunRace, 7-Speed, 11-34t',

                'brakes': 'Radius CX7, mechanical disc, 160mm',

                'wheels': '650b disc, double-wall alloy, pinned, 32h',
                'tires': 'Nimbus II Sport, 650b x 2.3"',
                
                'frame': 'Specialized A1 Premium Aluminum, Ground Control Positioning, formed tubes, post-mount disc, fender/rack mounts',
                'fork': 'Steel formed tubes, post-mount disc, fender/rack mounts',},
            '2.0 Low Entry': {'cost': 700.00,
                'stem': '3D-forged alloy, 31.8mm, 7-degree rise',
                'seatpost': 'Alloy, 2-bolt clamp, 27.2mm',
                'saddle': 'Specialized Body Geometry Comfort Gel',
                'handlebars': 'Specialized Roll, 6061 alloy, Double butted, 15-degree backsweep, 136mm rise, 31.8mm',

                'shiftlevers': 'microSHIFT TS39 Trigger shift, 7-speed',
                'crankset': 'Forged aluminum arms, 3-piece, 7 speed',
                'derailleurs': 'microSHIFT RD-M26S, 7-speed',
                'cassette': 'SunRace, 7-Speed, 11-34t',

                'brakes': 'Radius CX7, mechanical disc, 160mm',

                'wheels': '650b disc, double-wall alloy, pinned, 32h',
                'tires': 'Nimbus II Sport, 650b x 2.3"',
                
                'frame': 'Specialized A1 Premium Aluminum, Low Entry , Ground Control Positioning, formed tubes, post-mount disc, fender/rack mounts',
                'fork': 'Steel formed tubes, post-mount disc, fender/rack mounts',},
            '3.0': {'cost': 1100.00,
                'stem': '3D-forged alloy, 31.8mm, 7-degree rise',
                'seatpost': 'Alloy, 2-bolt clamp, 27.2mm',
                'saddle': 'Specialized Body Geometry Comfort Gel',
                'handlebars': 'Specialized Roll, 6061 alloy, Double butted, 15-degree backsweep, 136mm rise, 31.8mm',

                'shiftlevers': 'MicroSHIFT, 8-speed',
                'crankset': '3 pc, Alloy Forged Arms',
                'derailleurs': 'MicroSHIFT Advent 8 Speed, W/O Clutch',
                'cassette': 'MicroSHIFT, 8-Speed, 12-42t',

                'brakes': 'Tektro HD-T275, hydraulic disc, 160 mm rotor',

                'wheels': '650b disc, double-wall alloy, pinned, 32h',
                'tires': 'Nimbus II Sport, 650b x 2.3"',
                
                'frame': 'Specialized A1 Premium Aluminum, Ground Control Positioning, formed tubes, post-mount disc, fender/rack mounts',
                'fork': 'Steel formed tubes, post-mount disc, fender/rack mounts',},
            '3.0 Low Entry': {'cost': 1100.00,
                'stem': '3D-forged alloy, 31.8mm, 7-degree rise',
                'seatpost': 'Alloy, 2-bolt clamp, 27.2mm',
                'saddle': 'Specialized Body Geometry Comfort Gel',
                'handlebars': 'Specialized Roll, 6061 alloy, Double butted, 15-degree backsweep, 136mm rise, 31.8mm',

                'shiftlevers': 'MicroSHIFT, 8-speed',
                'crankset': '3 pc, Alloy Forged Arms',
                'derailleurs': 'MicroSHIFT Advent 8 Speed, W/O Clutch',
                'cassette': 'MicroSHIFT, 8-Speed, 12-42t',

                'brakes': 'Tektro HD-T275, hydraulic disc, 160 mm rotor',

                'wheels': '650b disc, double-wall alloy, pinned, 32h',
                'tires': 'Nimbus II Sport, 650b x 2.3"',
                
                'frame': 'Specialized A1 Premium Aluminum, Low Entry , Ground Control Positioning, formed tubes, post-mount disc, fender/rack mounts',
                'fork': 'Steel formed tubes, post-mount disc, fender/rack mounts',},
        },
        'descriptions': [`They say that every journey begins with a single step, but when that journey is related to exercise, that first step can sure be a doozy. It can be life-changing, however, and there's no better machine to take the plunge with than with the Roll.`,
        `The Roll 2.0 has everything you need to help achieve your goals, like a wide range of MicroSHIFT gears, a comfortable, upright geometry, wide and grippy 650b tires, hassle-free mechanical disc brakes, and a whole host of other components that are built to withstand years of riding. You don't have to sacrifice—you just need the Roll 2.0.`,
        `The Roll is made from our A1 Premium Aluminum, and it features our Ground Control Positioning that makes it easy to put a foot down when stopped. This Roll also comes ready with rack/fender mount, making it easy to carry extra weight.`,
        `Wide diameter, 650b x 2.3" Nimbus II Sport tires provide excellent traction, stability, and cushioning, which creates a safer, more reliable, and more comfortable ride on either paved or dirt roads.`]
    },
    'Turbo Vado': {
        'colors' : {
            'Cast Black':['images/Bikes/TurboVado/CastBlack0.webp', 'images/Bikes/TurboVado/CastBlack1.webp'],
            'White Mountains':['images/Bikes/TurboVado/WhiteMountains0.webp', 'images/Bikes/TurboVado/WhiteMountains1.webp'],
            'Red Tint': ['images/Bikes/TurboVado/RedTint0.webp', 'images/Bikes/TurboVado/RedTint1.webp']},
        'sizes' : ['XS', 'S', 'M', 'L', 'XL'],
        'trims' : {
            '3.0': {
                'cost': 3250.00,
                'stem': 'Specialized Flowset, 3D-forged alloy, 20-degree rise, 31.8mm clamp',
                'seatpost': 'Specialized, 6061 alloy, 2-bolt clamp, 0mm setback, 30.9mm',
                'saddle': 'Rivo Sport, steel rails, 155mm',
                'handlebars': 'Specialized, alloy, 15-degree backsweep, 46mm rise, 31.8mm',

                'shiftlevers': 'Shimano Alivio, 9-speed w/ Optical Gear Display',
                'crankset': 'Custom alloy forged crankarms',
                'derailleurs': 'Shimano Alivio, SGS, 9-speed',
                'cassette': 'Shimano CS-HG400, 9-speed, 11-36t',

                'brakes': 'Shimano BR-MT200, hydraulic disc, 180mm',

                'wheels': '650b disc, double-wall alloy, pinned, 32h',
                'tires': 'Pathfinder Sport Reflect, 650Bx2.3',
                
                'frame': 'E5 Aluminum, bottom bracket motor mount, fully integrated &lockable downtube battery, internal cable routing, lock and front rack mount, sliding dropout',
                'fork': 'SR Suntour MobieA32, 80mm travel, lockout, fender-mounts, integrated light mount',},
            '4.0': {'cost': 4000.00,
                'stem': 'Specialized Flowset, 3D-forged alloy, 20-degree rise, 31.8mm clamp',
                'seatpost': 'Spring suspension, alloy, 40mm travel, 30.9mm, 2-bolt clamp, 34.9mm sleeve',
                'saddle': 'Rivo Sport, steel rails, 155mm',
                'handlebars': 'Specialized, alloy, 15-degree backsweep, 46mm rise, 31.8mm',

                'shiftlevers': 'SRAM NX, 11-speed',
                'crankset': 'Custom alloy forged crankarms',
                'derailleurs': 'SRAM NX, 11-speed',
                'cassette': 'SRAM PG-1130, 11-speed, 11-42t',

                'brakes': 'SRAM Level, 2-piston caliper, hydraulic disc, 180mm 6-bolt',

                'wheels': '650b disc, double-wall alloy, pinned, 32h',
                'tires': 'Pathfinder Sport Reflect, 650Bx2.3',
                
                'frame': 'E5 Aluminum, bottom bracket motor mount, fully integrated &lockable downtube battery, internal cable routing, lock and front rack mount, sliding dropout',
                'fork': 'SR Suntour MobieA32, 80mm travel, lockout, fender-mounts, integrated light mount',},
            '5.0': {'cost': 5000.00,
                'stem': 'Specialized Flowset, 3D-forged alloy, 20-degree rise, 31.8mm clamp',
                'seatpost': 'Spring suspension, alloy, 40mm travel, 30.9mm, 2-bolt clamp, 34.9mm sleeve',
                'saddle': 'Rivo Sport, steel rails, 155mm',
                'handlebars': 'Specialized, alloy, 15-degree backsweep, 46mm rise, 31.8mm',

                'shiftlevers': 'SRAM S700, single-click lever',
                'crankset': 'Custom alloy forged crankarms',
                'derailleurs': 'SRAM GX, long cage, 11-speed',
                'cassette': 'SRAM PG-1130, 11-speed, 11-42t',

                'brakes': 'SRAM G2 RS, 4-piston caliper, hydraulic disc, 180mm',

                'wheels': '650b disc, double-wall alloy, pinned, 32h',
                'tires': 'Pathfinder Sport Reflect, 650Bx2.3',
                
                'frame': 'E5 Aluminum, bottom bracket motor mount, fully integrated &lockable downtube battery, internal cable routing, lock and front rack mount, sliding dropout',
                'fork': 'Rockshox Recon Silver RL, 80mm travel, Motion-Control, fender-mounts',},
        },
        'descriptions': [`Consider Vado your high-performance transportation bike, getting you where you’re going with an unmatched combination of speed, reliability, and confidence. Whether you load it up with your stuff, or jump on and go, commute to work, or ride to the gym, Vado’s full power and huge range will get you from ‘point A’ to ‘point B’ ASAP.`,
        `The Specialized Vado has everything you need for e-powered transport. It brings a balanced nature to the way it handles and superior levels of comfort, plus a motor range of up to 90 miles. This is a true class leader of its type.`,
        `TURBO: The heart of the Vado is its Turbo technology, an advanced and integrated electric bike system that delivers an unequaled combination of power, natural feel, anti-theft functions, training tips, a full-function bike computer, 93 miles / 150 km of range, and more.`,
        `POWERFUL: It’s you, just faster — it’s 4x You. The Turbo Full Power system senses the force you apply to the pedals and naturally quadruples it for an experience that makes getting up any hill or to any destination no sweat. Literally.`]
    }
}

export default ModelInfo