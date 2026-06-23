/* ============================================================================
   CARD DATA — Hunting for Black Holes & Neutron Stars
   School on Gravity 2026 · Day 2 interactive exercise
   ----------------------------------------------------------------------------
   TO ADD A NEW CARD: copy an existing { ... } block, edit the fields, done.
   The page (bhns_cards.html) reads this file and renders everything.

   OBJECT CARD fields:
     id        : short label shown on the card ("A1"); use "" for extras
     cat       : must match a key of OBJECT_CATEGORIES
     name      : card title
     why       : "What & why" — what the source IS + how it relates to
                 understanding BHs/NSs. Shown on the face of the card.
     signal    : "What to look for" — the observable phenomena/signatures
                 (e.g. kilonova, jet, optical/IR transient, RV wobble).
                 SOLUTION field — ONLY shown with ?answers=1 in the URL.
     answers   : "How to detect it" — consolidated technique + facilities.
                 Format: technique <waveband/messenger> — what phenomenon it
                 detects (example observatories); semicolons separate methods.
                 Only name facilities that exist as TELESCOPE cards below.
                 SOLUTION field — ONLY shown with ?answers=1 in the URL.
     extra    : true => rendered as a bonus card (dashed outline)
     img      : (optional) path to an image shown when the card is clicked,
                e.g. "bhns_card_images/phenomena/a1_massive_ob_stars.jpg"
                Omit (or leave undefined) for a non-clickable card.
     imgpos   : (optional) pan the image. e.g. "top", "bottom", "50% 20%". Defaults to "center".
     imgscale : (optional) zoom factor. Default shows the full image (object-fit:contain).
                > 1 zooms in (crops into the image). e.g. imgscale: 1.4

   TELESCOPE CARD fields:
     band     : must match a key of TELESCOPE_BANDS
     name     : facility name
     core     : true => ★ core-deck facility
     img      : path to the card image, e.g. "bhns_card_images/lisa.jpg"
                (save your own images into the bhns_card_images/ folder;
                a colored monogram placeholder is shown if the file is missing)
     imgpos   : (optional) CSS object-position to control crop, e.g. "top", "50% 20%"
    link     : external URL shown on the card (e.g. Wikipedia, project page)
         use a full URL, e.g. "https://en.wikipedia.org/wiki/LIGO"
     tstart   : first year of operations (number, drives the timeline bar)
     tend     : last year (number) or null = ongoing / open-ended
     future   : true => planned / under construction (hatched timeline bar)
     spec     : spectral coverage bar. kind: "em" (log10 photon frequency, Hz),
                "gw" (log10 GW frequency, Hz) or "nu" (log10 neutrino energy, eV).
                segs: one or more [lo, hi] segments on that log scale.
                Cheat sheet (log10 Hz): 1 GHz=9 · 1 µm=14.48 · 550 nm=14.74 ·
                1 keV=17.38 · 1 MeV=20.38 · 1 GeV=23.38 · 1 TeV=26.38
     freq     : frequency / wavelength coverage (text on the card)
     about    : "About" — one blurb that (1) says what the facility IS,
                (2) what it can measure, tied to the phenomenon hints
                (RVs, UV excess, kilonova, radio pulses, GW chirp,
                afterglows, microlensing...), and (3) any status/notes.
                (Replaces the former product + notes fields.)
     use      : key BH/NS use case — ONLY shown with ?answers=1
     refs     : list of { t: "Author + year", u: ADS link or null }
   ========================================================================== */

const OBJECT_CATEGORIES = {
  A: { label: "A · Progenitors & precursors", color: "#a9bb40" },
  B: { label: "B · Explosive endpoints",      color: "#eeca39" },
  C: { label: "C · Single compact objects",   color: "#ff8635" },
  D: { label: "D · Compact objects in binaries", color: "#90c8dc" },
  E: { label: "E · Doule Compact object mergers", color: "#4C3325" },
};

const OBJECT_CARDS = [
  // ---------- A. Progenitors & precursors ----------
  { id: "A1", cat: "A", name: "Massive OB stars in binaries",
    why: "Hot, massive O/B-type stars, very often in multiple systems. BH/NS originate from massive binary stars, so understanding their progenitor populations is crucial. The binary fraction and orbital-parameter distributions set the initial conditions for everything that follows for gravitational wave astronomy.",
    signal: "binaries can be detected from I) periodic Doppler shifts of spectral lines (from which orbital parameters can be measured); II) via astrometric wobble on the sky; III) from eclipses in the light curve.",
    answers: "Radial-velocity curves <optical/UV> Doppler orbital parameters of spectroscopic binaries (e.g., SDSS-V, VLT, 4MOST); astrometric orbits <optical> the on-sky wobble, masses & inclination (e.g., Gaia, which also gives RVs via its Radial Velocity Spectrometer); eclipse photometry <optical> eclipsing systems, pins inclination (e.g., TESS).",
    img: "bhns_card_images/phenomena/OB_star_binary.png", imgscale: 0.5, imgpos: "left center" },

  { id: "A2", cat: "A", name: "Stripped (helium) stars ",
    why: "Hot, helium-rich cores left behind after a binary companion strips off the hydrogen envelope. Direct products of mass transfer and progenitors of stripped-envelope SNe, a key signpost of the binary route to compact objects. At low-mass, these stars are called sdOB or He giants, at high mass (relevant for BH/NS formation) they are called 'intermediate-mass stripped stars' or Wolf-Rayet stars.", // (see e.g., Götberg et al. 2018; Drout et al. 2023)
    signal: "Intermediate-mass stripped stars are more bright in UV excess (they are hiding in the composite spectrum of an otherwise cooler-looking star). WR stars are bright, hot, and helium-rich, with strong emission lines in their spectra.",
    // answers: "UV imaging/spectroscopy <UV>, reveals the hot stripped star hidden in the composite spectrum (UVEX, HST, Swift-UVOT, GALEX [archival]); optical/IR spectroscopy <optical/IR>  characterises the cooler companion and orbit (SDSS-V/APOGEE).", 
    answers: "UV imaging/spectroscopy <UV>: reveals the hot intermediate-mass stripped star hidden in the composite spectrum (e.g., UVEX, HST, Swift-UVOT, GALEX [archival]); optical/IR spectroscopy <optical/IR>: characterises the cooler companion and orbit (e.g., SDSS-V/APOGEE); for WR stars: emission-line imaging + spectroscopy <optical/IR>: strong broad He/C/N wind emission lines flag WR stars directly (e.g., VLT, 4MOST, HST; JWST/Roman).",
    img: "bhns_card_images/phenomena/stripped_star.png", imgscale: 0.6 },

  { id: "A3", cat: "A", name: "RSG/YSG/BSG supernova progenitors ",
    why: "Evolved red/yellow/blue supergiants caught as the immediate progenitors of core-collapse SNe. Seeing them explode or disappear maps which (mass) stars make NSs versus collapse quietly to BHs. Note the Red Supergiant Problem: apparent lack of Type II-P progenitors above ~18–20 Msun.",
    signal: "A specific supergiant sitting exactly at the SN position in old images, that is gone afterwards. ",
    answers: "Deep, high-resolution imaging <optical/IR>: pinpoints the supergiant at the SN site and confirms its disappearance years later (e.g., HST, JWST, Roman); wide-field time-domain survey <optical>: discovers the SN and delivers the position (e.g., Rubin/LSST, ZTF, ASAS-SN).",
    img: "bhns_card_images/phenomena/RSG_YSG_BSG.png", imgscale: 0.75, imgpos: "center" },

  // { id: "A4", cat: "A", name: "Luminous red novae (common-envelope ejections)",
  //   why: "Slow, red transients produced when a binary ejects a common envelope (or merges). The only direct observational window on common-envelope evolution: one of the key uncertainties in the formation channel shrinks binaries toward compact-object mergers (e.g., Howitt et al. 2020).",
  //   signal: "A red, often double-peaked optical/IR transient that fades slowly and reddens into a dusty remnant.",
  //   techniques: "High-cadence optical/IR transient photometry + spectroscopic classification; IR follow-up for dust. → Optical/IR.",
  //   answers: "Rubin (LSST), ZTF, Gaia alerts, ATLAS/ASAS-SN, Roman (extragalactic)", 
  //   img: "bhns_card_images/phenomena/V838Mon.jpg", imgscale: 0.9, imgpos: "center" },

  // { extra: true, id: "", cat: "A", name: "Pre-SN outbursts & LBV-like eruptions",
  //   why: "Episodic mass loss in the final years before collapse shapes circumstellar interaction (Type IIn) and remnant masses.",
  //   signal: "Precursor detections in high-cadence survey light curves.",
  //   answers: "ZTF, Rubin (LSST), ATLAS/ASAS-SN" },

  // ---------- B. Explosive endpoints ----------
    { id: "B1", cat: "B", name: "Hydrogen-rich (Type II) supernovae",
    why: "Explosions of massive stars that kept their hydrogen envelope: the most commonly observed massive-star death (and the main NS-forming channel?). Their rates and progenitor masses calibrate which stars explode (NS forming?) versus collapse quietly (BH forming?).",
    signal: "A hydrogen-rich transient: strong hydrogen lines whose shape shows fast-expanding ejecta, often with a ~100-day brightness plateau (II-P).",
    img : "bhns_card_images/phenomena/SN_typeII.png", imgscale: 0.8, imgpos: "center",
    answers: "Time-domain photometry <optical>: finds the H-rich transient and its ~100-day plateau (e.g., Rubin, ZTF, BlackGEM); spectroscopic classification <optical>: strong hydrogen lines confirm Type II (e.g., 4MOST, SDSS-V)." },

  { id: "B2", cat: "B", name: "Stripped-envelope SNe (IIb/Ib/Ic)",
    why: "Core-collapse SNe whose progenitors lost their hydrogen (and sometimes helium) layers, largely through binary stripping, but possibly also through winds. They trace the binary route to NS/BH formation, and their initially unexpectedly high rate indicated stripped stars should be common.",
    signal: "Supernova spectra with weak/absent hydrogen (IIb/Ib), or no helium either (Ic).",
    img : "bhns_card_images/phenomena/SN_typeIb.png", imgscale: 0.8, imgpos: "center",
    answers: "Time-domain photometry <optical> discovers the SN (e.g., ZTF, Rubin); optical spectroscopy <optical> H/He line diagnostics sort IIb vs Ib vs Ic (e.g., VLT, 4MOST)." },

    
{ id: "B3", cat: "B", name: "Collapsars, Long GRBs /  (broad-lined Ic SNe)",
    why: "A stripped, rapidly rotating massive star whose core collapses to a black hole. Because the core carries high angular momentum, infalling material forms an accretion disk that launches a relativistic jet: providing an EM-visible, real-time view of a stellar black hole being born, and a potential handle on progenitor spin. Chemically homogeneously evolving (CHE) stars are a leading candidate channel for delivering such a stripped, fast-spinning core at collapse.",
    signal: "A long (>2s) gamma-ray burst from the relativistic jet, or seen at a different angle/efficiency, a soft fast X-ray transient (a new class that the Einstein Probe is uncovering). The burst is accompanied by a broad-lined Type Ic (= no He + very high-velocity) SN, a bright early-time optical counterpart, and a fading (sometimes rebrightening) multi-wavelength afterglow (X-ray → optical → radio).",
    img : "bhns_card_images/phenomena/collapsar.png", imgscale: 1.5, imgpos: "center",
    answers: "Prompt-jet <gamma-ray / soft X-ray>, the relativistic jet itself (e.g., Fermi, Swift-BAT; Einstein Probe for the soft X-ray transients); afterglow follow-up <X-ray → optical → radio>, the fading external shock (e.g., Swift-XRT/UVOT, VLA); SN spectroscopy <optical>, confirms the broad-lined Type Ic (e.g., VLT/ELT)" },
    // very-high-energy follow-up <gamma-ray,TeV>, nearby afterglows (e.g., CTAO).

  // { id: "B4", cat: "B", name: "Superluminous SNe & (P)PISN candidates",
  //   why: "Extremely luminous supernovae, some of them candidate (pulsational) pair-instability explosions. They probe the pair-instability regime that carves the upper BH 'mass gap' (~50–130 M☉).",
  //   signal: "A very slow, very luminous light curve — sometimes with bumps from pulsations — favouring low-metallicity hosts.",
  //   techniques: "Deep wide-field time-domain surveys + spectroscopy; high-redshift searches. → Optical/near-IR (high-z).",
  //   img : "bhns_card_images/phenomena/SLSNe.png", imgscale: 0.8, imgpos: "center",
  //   answers: "Rubin (LSST), Roman (high-z), Euclid, JWST spectroscopy" },

  { id: "B4", cat: "B", name: "Failed SNe / 'disappearing' massive stars",
    why: "Massive stars that simply vanish instead of exploding, collapsing directly to a black hole (e.g. N6946-BH1). The most direct evidence for silent BH formation, and what sets the explode-vs-collapse fraction.",
    signal: "A star present in earlier images that fades away sometimes after a brief, faint optical/IR brightening.",
    img : "bhns_card_images/phenomena/FailedSN.png", imgscale: 0.8, imgpos: "center",
    answers: "Repeated deep imaging + difference imaging <optical/IR> catches the star vanishing, sometimes after a faint IR brightening (e.g., HST, JWST, Roman, Rubin)." },
    // EXTRA
  // { extra: true, id: "", cat: "B", name: "Shock breakout & early shock-cooling emission",
  //   why: "First photons from a SN: progenitor radius and final mass-loss diagnostics, hours-timescale physics.",
  //   signal: "Wide-field UV/X-ray monitors with minutes-level alerts.",
  //   answers: "ULTRASAT, Einstein Probe, UVEX, Swift" },
  // { extra: true, id: "", cat: "B", name: "Galactic core-collapse neutrino burst",
  //   why: "Only direct probe of the collapsing core and proto-NS cooling (SN 1987A); will fire ~hours before light.",
  //   signal: "MeV neutrino burst detection; SNEWS early-warning network.",
  //   answers: "Super-K/Hyper-K, IceCube, KM3NeT, DUNE/JUNO" },
  // { extra: true, id: "", cat: "B", name: "Natal kicks (pulsar velocities)",
  //   why: "Pulsar proper motions calibrate the kick distributions (Hobbs Maxwellian) that decide binary survival — see the Day 1 kick lottery!",
  //   signal: "VLBI astrometry & timing proper motions of young pulsars.",
  //   answers: "VLBA/ngVLA, SKA-Mid, FAST/MeerKAT timing, Gaia (runaway stars)" },

  // ---------- C. Single compact objects ----------
  { id: "C1", cat: "C", name: "Isolated Neutron Star",
    why: "Single, magnetized, rotating neutron stars, seen mainly as radio pulsars (including recycled millisecond pulsars that might have lost their companion). Natural clocks whose spins, magnetic fields and proper motions encode NS birth, recycling history and SN kicks.",
    signal: "Highly regular, periodic radio pulses (ms–s period) from a steep-spectrum point source.",
    img : "bhns_card_images/phenomena/single_NS.png", imgscale: 0.8, imgpos: "center",
    answers: "Radio pulsation searches + precision timing <radio> periodic pulses encode spin, B-field and kinematics (e.g., SKA-Low/Mid, FAST, MeerKAT, CHIME, LOFAR)." },

  { id: "C2", cat: "C", name: "Isolated stellar-mass black holes",
    why: "Lone stellar-mass black holes with no companion to accrete from, so they emit nothing (while they might represent the majority of the BH population!).",
    signal: "A slow, achromatic brightening of a background star as the BH drifts in front of it, plus a tiny shift of that star's apparent position",
    img : "bhns_card_images/phenomena/single_BH.png", imgscale: 0.8, imgpos: "center",
    answers: "Photometric microlensing <optical/near-IR> — a slow, achromatic brightening as the BH crosses a background star (e.g., OGLE, Rubin, Roman [Bulge survey: 100s–1000s expected]); astrometric microlensing <optical> — the tiny position shift breaks the mass–distance degeneracy (e.g., Gaia, HST, Roman). Only known system OGLE-2011-BLG-0462; Sahu/Lam 2022." },

  // { id: "C2", cat: "C", name: "Magnetars & fast radio bursts (FRBs)",
  //   why: "Extreme-B NSs; SGR 1935+2154 tied (some) FRBs to magnetars — NS tell-tales at cosmological distances.",
  //   signal: "Radio bursts + X-ray/soft-γ outbursts; localization to host galaxies.",
  //   answers: "CHIME, FAST, DSA-2000, SKA, Einstein Probe, Fermi-GBM, NICER" },

    // EXTRA
  // { extra: true, id: "", cat: "C", name: "Thermal emission from NS surfaces — the EoS",
  //   why: "Pulse-profile modelling gives simultaneous mass & radius → dense-matter equation of state (complements GW tidal deformability).",
  //   signal: "Soft X-ray timing & phase-resolved spectroscopy.",
  //   answers: "NICER, XMM-Newton, NewAthena, (XRISM spectroscopy)" }, // Anna Watts

  // ---------- D. Compact objects in binaries ----------
  { id: "D1", cat: "D", name: "Low-mass X-ray binaries",
    why: "A compact object (NS or BH) accreting from a low-mass companion via Roche-lobe overflow. The prime laboratory for BH spin and mass measurements from before GWs. Also the recycling channel that spins up millisecond pulsars",
    signal: "Bright, often transient X-ray outbursts; sometimes relativistic radio jets; the faint companion showing when the system is in an X-ray quiescencent state.",
    img : "bhns_card_images/phenomena/LMXRB.png", imgscale: 0.4, imgpos: "center",
    answers: "X-ray monitoring/timing <X-ray> the bright, often transient accretion outbursts (e.g., Einstein Probe, Swift, NICER); radio interferometry <radio> for any potential jets (VLA, SKA); quiescent optical spectroscopy <optical> companion RV gives the compact-object mass (VLT)." },

  { id: "D2", cat: "D", name: "High-mass X-ray binaries",
    why: "A compact object (NS or BH) accreting from a massive O/B donor's wind or disc. Very likely immediate progenitors of double compact objects (though their spins are very different?).",
    signal: "Persistent or outbursting X-rays (often X-ray pulsations from a NS) alongside a bright, massive optical companion in orbit.",
    img : "/bhns_card_images/phenomena/HMXRB.png", imgscale: 0.6, imgpos: "center", 
    answers: "X-ray timing/spectroscopy <X-ray> accretion (often NS pulsations) from the donor's wind/disc (e.g., Einstein Probe, Swift, NuSTAR, NICER, Chandra, XMM-Newton); optical spectroscopy <optical> to get RV curves which enable measurements of the massive donor's orbit and mass (e.g., VLT, SDSS-V), radio interferometry <radio> for any potential jets (e.g., VLA, SKA)" },

  { id: "D3", cat: "D", name: "Dormant (detached) BH/NS + star binaries",
    why: "Detached binaries where an ordinary star orbits an unseen, non-accreting black hole or neutron star. These 'dormant' systems should form the majority of systems by number and help test binary-evolution and natal-kick models.",
    signal: "A single visible star that is seen to wobble astrometrically and/or show variability in radial velocity. Potentially also ellipsoidal variation.",
    img : "bhns_card_images/phenomena/Dormant_BH.png", imgscale: 0.6, imgpos: "center",
    answers: "Astrometric orbits <optical> the visible star wobbling around an unseen mass (e.g., Gaia but also consistent HST/JWST); single-lined RV curves (SB1) <optical/IR> orbit & mass function of the dark companion (e.g., SDSS-V, 4MOST, VLT); time-domain photometry <optical> ellipsoidal variation / self-lensing (e.g., TESS, Rubin) but no system found like this so far. Interesting systems include oMEGACat BH-2 Gaia BH1–3, VFTS 243" },

    { id: "D4", cat: "D", name: "Pulsars in binaries",
    why: "A radio pulsar in orbit with another star, e.g., white dwarf or second neutron star. Double-neutron-star systems reveal compact-binary progenitors and enable precision tests of gravity, while recycled millisecond pulsars trace past mass transfer and include some of the most massive known NSs.",
    signal: "Periodic radio pulses whose arrival times are modulated by orbital motion (and by relativistic effects in the tightest systems).",
    img : "bhns_card_images/phenomena/pulsars_in_bin.png", imgscale: 0.8, imgpos: "center",
    answers: "Precision pulsar timing <radio>: orbital (and relativistic) modulation of the pulse arrival times (e.g., MeerKAT, SKA-Mid, FAST); companion follow-up <optical>: for a white-dwarf companion, its spectrum gives a radial-velocity curve (hence the mass ratio) plus a cooling age and independent mass; a second neutron star is dark, so timing alone is available for those systems (e.g., Rubin, VLT)",
   },
  // gamma-ray selection <gamma-ray> Fermi-LAT detects pulsed GeV emission from millisecond pulsars and flags unidentified sources for targeted radio searches, including eclipsing 'spider' binaries (Fermi).

  // { id: "D4", cat: "D", name: "Spider pulsars (redbacks & black widows)",
  //   why: "Recycled ms pulsars ablating their companions; endpoint of LMXB evolution and hosts of the most massive NSs.",
  //   signal: "Radio timing + optical light curves/RVs of the irradiated companion.",
  //   answers: "FAST, MeerKAT, SKA; Rubin/VLT for companions; Fermi-LAT (γ-ray selection)" },
  // { id: "D5", cat: "D", name: "Binary & double pulsars",
  //   why: "E.g., (Hulse–Taylor, J0737−3039) Decades-long indirect GW proof; masses to 10⁻⁴ precision; tests of GR; direct NSNS progenitor census in the Galaxy.",
  //   signal: "Precision pulsar timing of relativistic binaries.",
  //   answers: "MeerKAT/SKA-Mid, FAST, Parkes, GBT, Effelsberg" },
    // EXTRA
  // { extra: true, id: "", cat: "D", name: "Ultraluminous X-ray sources (ULXs)",
  //   why: "Super-Eddington accretion; ULX pulsars proved some are NSs — candidates for HMXB→DCO evolution at low Z.",
  //   signal: "X-ray imaging of nearby galaxies; pulsation searches.",
  //   answers: "Chandra (imaging), NuSTAR (pulsations), XMM-Newton" },

  // ---------- E. DCO mergers & multi-messenger signals ----------
  { id: "E1", cat: "E", name: "Merging stellar-mass binary black holes",
    why: "Two stellar-mass black holes spiralling together and merging. The population's mass and spin distributions, mass gaps and correlations are our sharpest diagnostics of how BHs form and pair up.",
    signal: "A rising-frequency gravitational-wave 'chirp' with (usually) no expected EM light, though if the merger product BH smashes into dense gas environment (like an AGN-disc) it potentially creates a flare.",
    img : "bhns_card_images/phenomena/BBH_merger.png", imgscale: 0.8, imgpos: "center",
    answers: "Ground-based GW interferometry <gravitational waves> the chirp gives masses, spins and distance (e.g., LIGO–Virgo–KAGRA; ET/CE next generation); inspiral phase can be seen with LISA, wide-field optical follow-up <optical> candidate AGN-disc flares for gaseous environments only (BLACKGEM, ZTF, Rubin)." },

  { id: "E2", cat: "E", name: "Merging binary neutron star",
    why: "Two neutron stars spiralling together and merging. The multi-messenger posterchild is GW170817: gravitational waves plus a kilonova, a short GRB and an afterglow, tying NS masses and the dense-matter EoS to r-process nucleosynthesis.",
    signal: "A GW chirp, a prompt short gamma-ray burst, then a fast-fading blue→red kilonova and a multi-wavelength afterglow.",
    img : "bhns_card_images/phenomena/NSNS_merger.png", imgscale: 0.8, imgpos: "center",
    answers: "GW interferometry <gravitational waves> the GW chirp: masses & EoS (e.g., LVK; ET/CE next gen); prompt gamma-ray <gamma-ray> the short GRB (e.g., Fermi, Swift); wide-field optical/UV <UV/optical> locates the kilonova (e.g., Rubin, BlackGEM, GOTO, ZTF, ULTRASAT, UVEX); spectroscopy  <optical/IR> kilonova caused by r-process material (e.g., JWST, ELT, VLT); X-ray & radio monitoring <X-ray + radio> the afterglow (e.g., Chandra, VLA, SKA)." },
    // The "kilonova" is the light powered by r-process material. The newly synthesised r-process nuclei are radioactive and decay, and that radioactive decay heats the expanding ejecta and makes it glow for days to weeks.

  { id: "E3", cat: "E", name: "Merging black hole-neutron star",
    why: "A black hole merging with a neutron star. Like a NSNS merger, but the mass ratio and BH spin decide whether the NS is tidally shredded (producing EM light) or swallowed whole (GW-only), probe of the EoS.",
    signal: "A GW chirp; possibly a short GRB plus kilonova if the NS is disrupted, or no EM counterpart at all if it is swallowed whole.",
    img : "bhns_card_images/phenomena/BHNS_merger.png", imgscale: 0.8, imgpos: "center",
    answers: "GW interferometry <gravitational waves> the chirp; mass ratio & BH spin decide whether there is any EM light (e.g., LVK; ET/CE next gen); prompt gamma-ray <gamma-ray> short GRB if the NS is disrupted (Fermi, Swift); wide-field optical/UV tiling <UV/optical> searches for a kilonova (e.g., Rubin, BlackGEM, GOTO, ZTF, ULTRASAT, UVEX); spectroscopy <optical/IR> kilonova features if present (e.g., JWST, ELT, VLT); X-ray & radio <X-ray + radio> the afterglow (e.g., Chandra, VLA, SKA)." },


  { id: "E4", cat: "E", name: "Extreme mass ratio inspiral",
    why: "A stellar-mass compact object (or star) slowly spiralling into a supermassive black hole. Its intricate orbit maps the spacetime around the SMBH with extreme precision and extends the BH mass ladder to the supermassive regime.",
    signal: "A long-lived, mHz gravitational-wave signal with many harmonics tracing the relativistic orbit.",
    img : "bhns_card_images/phenomena/EMRI.png", imgscale: 0.8, imgpos: "center",
    answers: "Space-based GW interferometry <mHz gravitational waves> the long, many-harmonic inspiral itself (LISA); VLBI imaging <radio> images the host SMBH for context, not the EMRI (e.g., EHT/ngEHT)." },

    // { id: "E5", cat: "E", name: "Intermediate-mass BH binaries",
    // why: "From about 1000Msun - 10^{5}Msun ",
    // signal: "nHz timing residuals; mHz GW strain; (VLBI imaging of SMBHs).",
    // answers: "PTAs (NANOGrav/EPTA/PPTA/MPTA), LISA, EHT/ngEHT" },

      { id: "E5", cat: "E", name: "Supermassive BH binaries",
    why: "Two supermassive black holes orbiting after their host galaxies merged. They sit at the top of the BH mass ladder and link galaxy assembly to BH growth.",
    signal: "A nHz gravitational-wave background imprinted on pulsar arrival times; individual mHz mergers for lighter/closer systems; sometimes a dual AGN imaged directly.",
    img : "bhns_card_images/phenomena/SMBH_merger.png", imgscale: 0.8, imgpos: "center",
    answers: "Pulsar timing arrays <nHz gravitational waves> the stochastic background from the cosmic SMBH-binary population (PTAs: NANOGrav/EPTA/PPTA/MPTA); space-based GW <mHz gravitational waves> individual lighter/closer mergers (LISA); VLBI/optical imaging <radio/optical> resolves dual AGN directly (e.g., EHT/ngEHT)." }, 
    // EXTRA
  // { extra: true, id: "", cat: "E", name: "r-process fossil record",
  //   why: "Abundances in metal-poor halo stars & dwarf galaxies record the integrated history of NS mergers  'GW astronomy with stellar spectra'.",
  //   signal: "High-resolution optical spectroscopy (Eu, Sr, actinides).",
  //   answers: "VLT/ELT, 4MOST/WEAVE, SDSS-V; JWST (kilonova nebular spectra, e.g. Te in GRB 230307A)" },
  // { extra: true, id: "", cat: "E", name: "Galactic double white dwarfs & early-inspiral binaries (multiband GW)",
  //   why: "LISA verification binaries; stellar-mass BBHs caught years before LVK/ET sees the merger → multiband astronomy.",
  //   signal: "mHz GW strain; optical eclipsing DWD surveys.",
  //   answers: "LISA; ZTF/Rubin (eclipsing DWDs); Gaia" },
];

const TELESCOPE_BANDS = {
  gw:    { label: "Gravitational Waves", color: "#E98A3C" },
  radio: { label: "Radio",                 color: "#ebc21c" },
  optTD: { label: "Optical/IR · imaging & time domain", color: "#8ecf68" },
  optSp: { label: "Optical/IR · astrometry & spectroscopy", color: "#83cdc3" },
  uv:    { label: "Ultraviolet",           color: "#a670d2" },
  xray:  { label: "X-ray",                 color: "#5b7dec" },
  gamma: { label: "Gamma-ray",             color: "#da6ec4" },
};


// shorthand for ADS links
const ADS = id => `https://ui.adsabs.harvard.edu/abs/${id}/abstract`;
const ADSQ = q => `https://ui.adsabs.harvard.edu/search/q=${encodeURIComponent(q)}&sort=citation_count desc`;

const TELESCOPE_CARDS = [
  // ---------- GW & other messengers ----------
  { band: "gw", core: false, name: "LIGO–Virgo–KAGRA (LVK)", link: "https://www.ligo.org/",
    img: "bhns_card_images/ligo_virgo_kagra_lvk.png",
    tstart: 2015, tend: null, spec: { kind: "gw", segs: [[1.0, 3.7]] },
    freq: "~10 Hz – few kHz (GW)", about: "The current network of ground-based, km-scale laser interferometers (two LIGO detectors, Virgo, KAGRA). Measures the gravitational-wave chirp of merging compact binaries  masses, spins, distance and a sky map  and fires the low-latency alerts that trigger the whole EM follow-up chain. O4 ongoing; O5 brings A+/A♯ upgrades in the late 2020s.",
    use: "Merging BBH/NSNS/BHNS; triggers the entire EM follow-up chain",
    refs: [ { t: "Aasi + 2015", u: ADS("arXiv:1411.4547") }, { t: "Acernese + 2015", u: ADS("arXiv:1408.3978") }, { t: "Akutsu + 2021", u: ADS("arXiv:2005.05574") } ] },
  { band: "gw", core: false, name: "Einstein Telescope (ET)", link: "https://en.wikipedia.org/wiki/Einstein_Telescope",
    img: "bhns_card_images/einstein_telescope_et.jpg",
    tstart: 2035, tend: null, future: true, spec: { kind: "gw", segs: [[0.5, 4.0]] },
    freq: "~3 Hz – 10 kHz (GW)", about: "A planned third-generation, underground, cryogenic GW interferometer (triangular, ~10-km arms). An order of magnitude more sensitive than today's detectors: reaches binary black holes across cosmic time and gives early warning before a NSNS merger. Planned ESFRI project; site decision pending.",
    use: "BBH to z ~ 10–100: the full cosmic merger history",
    refs: [ { t: "Punturo + 2010", u: ADS("2010CQGra..27s4002P") }, { t: "ET Blue Book 2025", u: ADS("arXiv:2503.12263") } ] },
  { band: "gw", core: false, name: "Cosmic Explorer (CE)", link: "https://en.wikipedia.org/wiki/Cosmic_Explorer_(gravitational_wave_observatory)",
    img: "bhns_card_images/cosmic_explorer_ce.jpg",
    tstart: 2035, tend: null, future: true, spec: { kind: "gw", segs: [[0.7, 3.6]] },
    freq: "~5 Hz – 4 kHz (GW)", about: "A proposed US third-generation GW observatory with 20/40-km L-shaped arms. Together with ET it would catch the GW chirp of essentially every stellar-mass merger in the Universe. Proposed.",
    use: "With ET: detects essentially every stellar-mass merger in the Universe",
    refs: [ { t: "Evans + 2021", u: ADS("arXiv:2109.09882") } ] },
  { band: "gw", core: false, name: "LISA", link: "https://en.wikipedia.org/wiki/Laser_Interferometer_Space_Antenna",
    img: "bhns_card_images/lisa.jpg",
    tstart: 2035, tend: 2040, future: true, spec: { kind: "gw", segs: [[-4, -1]] },
    freq: "0.1 mHz – 0.1 Hz (GW)", about: "A space-based GW interferometer with 2.5-million-km arms, opening the low-frequency (mHz) band that is inaccessible from the ground. Hears supermassive-BH mergers, extreme-mass-ratio inspirals and ~10⁴ Galactic double white dwarfs, and catches stellar BBHs years before they chirp into the LVK band. Adopted by ESA in 2024; launch ~2035, 4.5-yr science phase.",
    use: "SMBH mergers, EMRIs, ~10⁴ Galactic double WDs, multiband stellar BBH",
    refs: [ { t: "Colpi + 2024", u: ADS("arXiv:2402.07571") } ] },
  { band: "gw", core: false, name: "Pulsar Timing Arrays (→ IPTA)", link: "https://en.wikipedia.org/wiki/Pulsar_timing_array",
    img: "bhns_card_images/pulsar_timing_arrays_ipta.jpg",
    tstart: 2004, tend: null, spec: { kind: "gw", segs: [[-9, -7]] },
    freq: "~1–100 nHz (GW)", about: "Not a telescope but a Galaxy-sized GW detector: decades of precision timing of an array of millisecond pulsars, sensitive to nHz gravitational waves. Looks for the correlated timing residuals imprinted by the background of supermassive-BH binaries. Combines NANOGrav, EPTA+InPTA, PPTA, MPTA and CPTA; first evidence for the nHz background announced in 2023.",
    use: "nHz background from SMBH binaries; Galactic-scale GW detector",
    refs: [ { t: "Agazie + 2023", u: ADS("arXiv:2306.16213") } ] },

  // { band: "gw", core: false, name: "IceCube / KM3NeT (→ Gen2)", link: "https://en.wikipedia.org/wiki/IceCube_Neutrino_Observatory",
  //   img: "bhns_card_images/icecube_km3net_gen2.jpg",
  //   tstart: 2011, tend: null, spec: { kind: "nu", segs: [[12, 16]] },
  //   freq: "TeV–PeV neutrinos", product: "High-energy neutrino alerts & point-source searches",
  //   notes: "KM3NeT partially operating in the Mediterranean; IceCube-Gen2 planned for the 2030s.",
  //   use: "Hadronic jet physics; ν limits on NS mergers & GRBs",
  //   refs: [ { t: "Aartsen + 2017", u: ADS("arXiv:1612.05093") }, { t: "Adrián-Martínez + 2016", u: ADS("arXiv:1601.07459") } ] },

  // { band: "gw", core: false, name: "Super-K (SK-Gd) → Hyper-Kamiokande", link: "https://en.wikipedia.org/wiki/Hyper-Kamiokande",
  //   img: "bhns_card_images/super_k_sk_gd_hyper_kamiokande.jpg",
  //   tstart: 1996, tend: null, spec: { kind: "nu", segs: [[6, 8]] },
  //   freq: "MeV neutrinos", product: "Burst detection; SNEWS early warning (hours before shock breakout)",
  //   notes: "Super-K operating since 1996 (now Gd-loaded); Hyper-K from ~2028.",
  //   use: "Galactic core-collapse SN: explosion mechanism, proto-NS cooling",
  //   refs: [ { t: "Hyper-K design report 2018", u: ADS("arXiv:1805.04163") }, { t: "Al Kharusi + 2021 (SNEWS 2.0)", u: ADS("arXiv:2011.00035") } ] },

  // ---------- Radio ----------
  { band: "radio", core: false, name: "SKA-Low (Australia)", link: "https://en.wikipedia.org/wiki/Square_Kilometre_Array",
    img: "bhns_card_images/ska_low_australia.jpeg",
    tstart: 2027, tend: null, future: true, spec: { kind: "em", segs: [[7.70, 8.54]] },
    freq: "50–350 MHz", about: "A giant low-frequency aperture array in Western Australia (eventually >100,000 antennas). Images the radio sky and beam-forms to find and time pulsars and FRBs, ideal for catching the periodic radio pulses of isolated and binary neutron stars, especially steep-spectrum ones. Under construction; science verification ~2027.",
    use: "Order-of-magnitude pulsar census increase; FRBs; steep-spectrum pulsars",
    refs: [ { t: "Braun + 2019", u: ADS("arXiv:1912.12699") } ] },

  { band: "radio", core: false, name: "SKA-Mid (South Africa)", link: "https://en.wikipedia.org/wiki/Square_Kilometre_Array",
    img: "bhns_card_images/ska_mid_south_africa.png",
    tstart: 2027, tend: null, future: true, spec: { kind: "em", segs: [[8.54, 10.19]] },
    freq: "350 MHz – 15.4 GHz", about: "The mid-frequency SKA dish array in South Africa (incorporating MeerKAT). High-precision pulsar timing and imaging boosts pulsar-timing-array sensitivity, finds relativistic binary pulsars and tracks merger afterglows. Staged rollout (AA2 → AA*) alongside SKA-Low.",
    use: "PTA sensitivity boost; relativistic binary pulsars; merger afterglows",
    refs: [ { t: "Braun + 2019", u: ADS("arXiv:1912.12699") } ] },

  { band: "radio", core: false, name: "MeerKAT", link: "https://en.wikipedia.org/wiki/MeerKAT",
    img: "bhns_card_images/meerkat.jpg",
    tstart: 2018, tend: null, spec: { kind: "em", segs: [[8.76, 9.54]] },
    freq: "0.58–3.5 GHz (UHF/L/S)", about: "A 64-dish radio interferometer in South Africa and an SKA-Mid precursor. Runs large imaging and pulsar-timing programmes (MeerTime, TRAPUM) good for the late-time radio afterglows of mergers and for discovering new relativistic binary pulsars. Will be absorbed into SKA-Mid.",
    use: "GW170817 late-time afterglow; new relativistic binary pulsars",
    refs: [ { t: "Jonas + 2016", u: ADSQ("Jonas MeerKAT 2016") }, { t: "Bailes + 2020", u: ADS("arXiv:2005.14366") } ] },

  { band: "radio", core: false, name: "FAST (500 m)", link: "https://en.wikipedia.org/wiki/Five-hundred-meter_Aperture_Spherical_Telescope",
    img: "bhns_card_images/fast_500_m.jpg", 
    tstart: 2020, tend: null, spec: { kind: "em", segs: [[7.85, 9.48]] },
    freq: "70 MHz – 3 GHz", about: "The 500-m FAST single-dish radio telescope in China the most sensitive in the world. A pulsar-discovery and FRB-monitoring machine: finds the periodic radio pulses of faint, distant neutron stars and builds the Galactic NSNS-progenitor census.",
    use: ">1000 new pulsars; FRB monitoring; NSNS progenitor census",
    refs: [ { t: "Nan + 2011", u: ADS("arXiv:1105.3794") }, { t: "Jiang + 2019", u: ADS("arXiv:1903.06324") } ] },

  { band: "radio", core: false, name: "CHIME", link: "https://en.wikipedia.org/wiki/Canadian_Hydrogen_Intensity_Mapping_Experiment",
    img: "bhns_card_images/chime.jpg",
    tstart: 2018, tend: null, spec: { kind: "em", segs: [[8.60, 8.90]] },
    freq: "400–800 MHz", about: "A Canadian transit interferometer (cylindrical reflectors, no moving parts) that surveys the whole northern sky each day with a real-time burst pipeline. Primarily an FRB factory it tied FRB 20200428 to the Galactic magnetar SGR 1935+2154, linking some FRBs to neutron stars. CHORD planned as successor.",
    use: "FRB factory (1000s); FRB 20200428 from Galactic magnetar SGR 1935+2154",
    refs: [ { t: "CHIME/FRB Collab. 2018", u: ADS("arXiv:1803.11235") }, { t: "CHIME/FRB Collab. 2020", u: ADS("arXiv:2005.10324") } ] },

  { band: "radio", core: false, name: "LOFAR", link: "https://en.wikipedia.org/wiki/LOFAR",
    img: "bhns_card_images/LOFAR-LOw-Frequency-ARray.jpg",
    tstart: 2010, tend: null, spec: { kind: "em", segs: [[7.00, 8.38]] },
    freq: "10–90 + 110–240 MHz", about: "A pan-European low-frequency radio array. Low-frequency imaging and beam-formed pulsar searches, good for steep-spectrum and long-period pulsars and for measuring FRB scattering. LOFAR 2.0 upgrade ~2026.",
    use: "Steep-spectrum & long-period pulsars; FRB scattering",
    refs: [ { t: "van Haarlem + 2013", u: ADS("arXiv:1305.3550") } ] },

  { band: "radio", core: false, name: "Very Large Array (VLA)", link: "https://en.wikipedia.org/wiki/Very_Large_Array",
    img: "bhns_card_images/VeryLargeArray.jpg",
    tstart: 1980, tend: null, spec: { kind: "em", segs: [[9.00, 11.06]] },
    freq: "1–50 GHz / 1.2–116 GHz", about: "The Karl G. Jansky Very Large Array: 27 movable dishes in New Mexico. µJy-level interferometric imaging and VLBI astrometry, measures the radio jets of X-ray binaries and mergers (e.g. GW170817's superluminal jet) and the proper motions of pulsars that reveal natal kicks. ngVLA early operations expected in the 2030s.",
    use: "GW170817 superluminal jet motion; XRB jets; pulsar proper motions (kicks!)",
    refs: [ { t: "Murphy + 2018", u: ADSQ("Murphy ngVLA science 2018") }, { t: "Mooley + 2018", u: ADS("arXiv:1810.12927") } ] },
  { band: "radio", core: false, name: "DSA-2000", link: "https://en.wikipedia.org/wiki/Deep_Synoptic_Array",
    img: "bhns_card_images/dsa_2000.png",
    tstart: 2028, tend: null, future: true, spec: { kind: "em", segs: [[8.85, 9.30]] },
    freq: "0.7–2 GHz", about: "A planned 2000-dish 'radio camera' that images the sky while commensally searching for pulsars and FRBs, a radio-transient and FRB-localization machine. Planned; construction this decade.",
    use: "Radio transient & FRB localization machine",
    refs: [ { t: "Hallinan + 2019", u: ADS("arXiv:1907.07648") } ] },

  { band: "radio", core: false, name: "EHT", link: "https://en.wikipedia.org/wiki/Event_Horizon_Telescope",
    img: "bhns_card_images/eso1907p.jpg",
    tstart: 2017, tend: null, spec: { kind: "em", segs: [[11.36, 11.54]] },
    freq: "230/345 GHz (VLBI)", about: "A global VLBI network that synthesises an Earth-sized mm-wave telescope at µas resolution. Images event-horizon-scale structure, the M87* and Sgr A* shadows at the supermassive end of the BH family. ngEHT expansion planned.",
    use: "M87* & Sgr A* shadows, the supermassive end of the BH family",
    refs: [ { t: "EHT Collab. 2019", u: ADS("arXiv:1906.11238") }, { t: "EHT Collab. 2022", u: ADSQ("Event Horizon Telescope 2022 Sagittarius A* first results") } ] },
  { band: "radio", core: false, name: "ALMA", link: "https://en.wikipedia.org/wiki/Atacama_Large_Millimeter_Array",
    img: "bhns_card_images/ALMA_Antennas_on_Chajnantor.jpg",
    tstart: 2011, tend: null, spec: { kind: "em", segs: [[10.92, 11.98]] },
    freq: "84–950 GHz", about: "A 66-antenna mm/sub-mm interferometer in the Atacama. High-resolution mm imaging and photometry, measures afterglow spectral energy distributions and reverse shocks for jet calorimetry.",
    use: "Afterglow SEDs & jet calorimetry; reverse shocks",
    refs: [ { t: "Wootten & Thompson 2009", u: ADSQ("Wootten Thompson ALMA 2009") } ] },

  // ---------- Optical / IR — imaging & time domain ----------
  { band: "optTD", core: false, name: "Vera C. Rubin Observatory (LSST)", link: "https://rubinobservatory.org/",
    img: "bhns_card_images/Rubin_Observatory_and_Its_Target.jpg",
    tstart: 2025, tend: 2036, spec: { kind: "em", segs: [[14.46, 14.97]] },
    freq: "320–1050 nm (ugrizy)", about: "An 8.4-m wide-field survey telescope in Chile that images 18,000 deg² repeatedly and issues ~10 million transient alerts per night. The premier optical/IR time-domain machine, catches SNe of every flavour, kilonovae, luminous red novae, ellipsoidal/self-lensing CO binaries and microlensing events. First look 2025; 10-yr LSST survey ~2026–2036.",
    use: "SNe of all flavours, kilonovae, LRNe, ellipsoidal & self-lensing CO binaries, µ-lensing",
    refs: [ { t: "Ivezić + 2019", u: ADS("arXiv:0805.2366") } ] },

  { band: "optTD", core: false, name: "ZTF", link: "https://en.wikipedia.org/wiki/Zwicky_Transient_Facility",
    img: "bhns_card_images/palomar_observatory_ZTF.jpg",
    tstart: 2018, tend: null, spec: { kind: "em", segs: [[14.52, 14.87]] },
    freq: "g, r, i (400–900 nm)", about: "A wide-field optical camera on the Palomar 48-inch, surveying 3760 deg²/h with a public alert stream. A supernova factory and transient finder, good for optical transients, candidate AGN-disc BBH flares and eclipsing double white dwarfs.",
    use: "SN factory; AGN-disc BBH flare candidates; eclipsing DWDs",
    refs: [ { t: "Bellm + 2019", u: ADS("arXiv:1902.01932") } ] },

  { band: "optTD", core: false, name: "BlackGEM (+ MeerLICHT)", link: "https://en.wikipedia.org/wiki/BlackGEM",
    img: "bhns_card_images/BlackGem_LaSilla_BG_after2nd.jpg",
    tstart: 2023, tend: null, spec: { kind: "em", segs: [[14.50, 14.93]] },
    freq: "u–z optical, 2.7 deg² each", about: "An array of wide-field optical telescopes at La Silla (its twin MeerLICHT co-points with MeerKAT for simultaneous radio–optical data). Built to search for the optical counterparts of GW alerts i.e., hunting kilonovae for O4/O5. Three telescopes now, expandable to 15.",
    use: "Kilonova hunting for O4/O5 GW alerts (P.I. Groot)",
    refs: [ { t: "Groot + 2024", u: ADSQ("Groot BlackGEM telescope array 2024") } ] },

  { band: "optTD", core: false, name: "GOTO", link: "https://en.wikipedia.org/wiki/Gravitational-wave_Optical_Transient_Observer",
    img: "bhns_card_images/GOTO-North_Open.jpg",
    tstart: 2022, tend: null, spec: { kind: "em", segs: [[14.63, 14.87]] },
    freq: "Wide-field optical (L band, 400–700 nm)", about: "Wide-field optical telescope arrays on La Palma and in Australia that tile a GW sky map within minutes. Optimised for rapidly identifying kilonova candidates after a GW trigger.",
    use: "Kilonova candidate identification",
    refs: [ { t: "Steeghs + 2022", u: ADS("arXiv:2110.05539") } ] },

  { band: "optTD", core: false, name: "All Sky Automated Survey for SuperNovae (ASAS-SN)", link: "https://en.wikipedia.org/wiki/All_Sky_Automated_Survey_for_SuperNovae_(ASAS-SN)",
    img: "bhns_card_images/ASAS_SN.jpg",
    tstart: 2014, tend: null, spec: { kind: "em", segs: [[14.50, 14.90]] },
    freq: "Optical, all-sky daily cadence", about: "A network of ~20 small robotic telescopes covering the whole sky daily. Discovers and monitors bright transients, nearby SNe, Galactic novae and the optical outbursts of X-ray binaries.",
    use: "Nearby SNe, Galactic novae, XRB optical outbursts",
    refs: [ { t: "Tonry + 2018", u: ADS("arXiv:1802.00879") }, { t: "Shappee + 2014", u: ADS("arXiv:1310.2241") } ] },

  { band: "optTD", core: false, name: "Transiting Exoplanet Survey Satellite (TESS)", link: "https://en.wikipedia.org/wiki/Transiting_Exoplanet_Survey_Satellite",
    img: "bhns_card_images/tess.jpg",
    tstart: 2018, tend: null, spec: { kind: "em", segs: [[14.48, 14.70]] },
    freq: "600–1000 nm", about: "A space-based wide-field photometer that surveys nearly the whole sky in 27-day sectors with continuous, high-cadence light curves. Good for the ellipsoidal variability of dormant compact-object binaries and for catching SN light curves from the very start.",
    use: "Ellipsoidal variability of dormant CO binaries; early SN light curves",
    refs: [ { t: "Ricker + 2015", u: ADS("arXiv:1406.0151") } ] },

  { band: "optTD", core: false, name: "Optical Gravitational Lensing Experiment (OGLE)", link: "https://en.wikipedia.org/wiki/Optical_Gravitational_Lensing_Experiment",
    img: "bhns_card_images/OGLE-telescope-in-Las-Campanas-Chile-in-operation-since-1996-KUlaczyk-Wyrzykowski.png",
    tstart: 1992, tend: null, spec: { kind: "em", segs: [[14.50, 14.65]] },
    freq: "I-band Galactic bulge monitoring", about: "A long-running optical survey of the Galactic bulge from Las Campanas, dedicated to photometric microlensing. Its long-timescale (long-t_E) events flag isolated stellar-mass BH candidates (e.g. OGLE-2011-BLG-0462).",
    use: "Long-t_E events → isolated BH candidates (OGLE-2011-BLG-0462)",
    refs: [ { t: "Udalski + 2015", u: ADS("arXiv:1504.05966") }, { t: "Mróz + 2022", u: ADS("arXiv:2207.10729") } ] },

  { band: "optTD", core: false, name: "Nancy Grace Roman Space Telescope", link: "https://en.wikipedia.org/wiki/Nancy_Grace_Roman_Space_Telescope",
    img: "bhns_card_images/Roman.png",
    tstart: 2026, tend: 2036, future: true, spec: { kind: "em", segs: [[14.11, 14.80]] },
    freq: "0.48–2.3 µm; 0.281 deg² WFI", about: "A 2.4-m wide-field infrared space telescope. Wide-field IR imaging, slitless spectroscopy and precision astrometry; its Galactic Bulge Time Domain Survey combines photometric + astrometric microlensing to weigh isolated black holes (100s–1000 expected) and finds high-z SNe and PISNe. Launch 30 Aug 2026; 5-yr prime mission.",
    use: "Astrometric+photometric µ-lensing → isolated-BH mass census (100s–1000 expected); high-z SNe & PISN",
    refs: [ { t: "Spergel + 2015", u: ADS("arXiv:1503.03757") }, { t: "Lam + 2023", u: ADSQ("Lam Roman isolated black holes microlensing") } ] },

  { band: "optTD", core: false, name: "Euclid", link: "https://en.wikipedia.org/wiki/Euclid_(spacecraft)",
    img: "bhns_card_images/Euclid_looking_into_the_Universe_ESA24697255.jpeg",
    tstart: 2023, tend: 2030, spec: { kind: "em", segs: [[14.18, 14.74]] },
    freq: "VIS 550–900 nm + NISP Y/J/H", about: "An ESA wide+deep optical/near-IR imaging and grism-spectroscopy survey satellite. Built for cosmology, but its deep fields also catch serendipitous transients and gravitationally lensed SNe. ~6-yr survey.",
    use: "Serendipitous transients in deep fields; lensed SNe",
    refs: [ { t: "Euclid Collab. (Mellier) + 2025", u: ADS("arXiv:2405.13491") } ] },

  // ---------- Optical / IR, astrometry & spectroscopy ----------
  { band: "optSp", core: false, name: "Gaia", link: "https://www.cosmos.esa.int/web/gaia",
    img: "bhns_card_images/Gaia_observes_the_Milky_Way_ESA24305955.jpeg",
    tstart: 2014, tend: 2025, spec: { kind: "em", segs: [[14.46, 14.96]] },
    freq: "G band 330–1050 nm; RVS 845–872 nm", about: "ESA's all-sky astrometric satellite: µas positions, parallaxes, motions and photometry for >10⁹ stars, plus radial velocities to G≈14. Astrometric orbits reveal dormant BH/NS companions by their wobble (Gaia BH1–3), and proper motions trace SN kicks. Observations ended Jan 2025; DR4 (Dec 2026) and DR5 (~2030), the discoveries are still ahead.",
    use: "Gaia BH1–3 & NS companions via astrometric wobble; runaway stars (kicks); µ-lensing",
    refs: [ { t: "Gaia Collab. 2016", u: ADS("arXiv:1609.04153") }, { t: "El-Badry + 2023", u: ADS("arXiv:2209.06833") }, { t: "Panuzzo + 2024", u: ADS("arXiv:2404.10486") } ] },

  { band: "optSp", core: false, name: "Sloan Digital Sky Survey (SDSS)", link: "https://en.wikipedia.org/wiki/Sloan_Digital_Sky_Survey",
    img: "bhns_card_images/sloan-telescope.jpg",
    tstart: 2020, tend: 2028, spec: { kind: "em", segs: [[14.25, 14.92]] },
    freq: "BOSS 360–1000 nm (R~2000); APOGEE 1.51–1.70 µm (R~22,500)", about: "The Sloan multi-object spectroscopic survey (2.5-m twin telescopes at APO + LCO), now taking multi-epoch spectra of ~6 million stars including ~600k OB(A) stars. Industrial-scale radial-velocity curves, ideal for selecting dormant compact-object candidates via RV variability.",
    use: "Industrial-scale dormant-CO candidate selection via RV variability",
    refs: [ { t: "Kollmeier + 2017", u: ADS("arXiv:1711.03234") } ] },

  { band: "optSp", core: false, name: " 4-metre Multi-Object Spectroscopic Telescope (4most)",
    img: "bhns_card_images/eso0704b.jpg",
    tstart: 2026, tend: null, spec: { kind: "em", segs: [[14.49, 14.91]] },
    freq: "370–950 nm, R~4000–20,000", about: "A massively multiplexed (~2400-fibre) spectroscopic facility on ESO's VISTA telescope, surveying much of the southern sky. Delivers the radial velocities that confirm Gaia compact-object binaries, plus stripped-star spectra and r-process abundances. First light ~2026.",
    use: "RV confirmation of Gaia CO binaries; stripped-star spectra; r-process abundances",
    refs: [ { t: "de Jong + 2019", u: ADS("arXiv:1903.02464") }, { t: "Jin + 2024", u: ADS("arXiv:2212.03981") } ] },

  { band: "optSp", core: false, name: "Very Large Telescope (VLT) ", link: "https://www.eso.org/public/teles-instr/paranal-observatory/vlt/",
    img: "bhns_card_images/view-Very-Large-Telescope-Chile-observatory-1511058249.jpg",
    tstart: 1998, tend: null, spec: { kind: "em", segs: [[13.18, 15.00]] },
    freq: "300 nm – 20 µm; K-band interferometry", about: "ESO's flagship: four 8.2-m Unit Telescopes (plus movable 1.8-m auxiliaries) that can be combined into a giant interferometer. UVES/X-shooter/MUSE spectroscopy and 10–100 µas interferometric astrometry, measures the RV orbits of quiescent BH binaries (VFTS 243) and the S-stars orbiting Sgr A*.",
    use: "RV orbits of quiescent BH binaries (VFTS 243); Galactic-centre S stars around Sgr A*",
    refs: [ { t: "GRAVITY Collab. 2017", u: ADS("arXiv:1705.02345") }, { t: "Shenar + 2022", u: ADS("arXiv:2207.07675") } ] },

  { band: "optSp", core: false, name: "Extremely Large Telescope (ELT)", link: "https://elt.eso.org/about/facts/",
    img: "bhns_card_images/ELT5k-2-wide-cc2.jpg",
    tstart: 2030, tend: null, future: true, spec: { kind: "em", segs: [[13.18, 14.93]] },
    freq: "0.35–20 µm", about: "ESO's 39-m Extremely Large Telescope, the largest optical/IR telescope ever built. Adaptive-optics imaging and spectroscopy at unmatched sensitivity: kilonova spectra to large distances (ET era) and faint compact-object companions. First light ~2029/30.",
    use: "Kilonova spectra to large distances (ET era); faint CO companions",
    refs: [ { t: "Padovani & Cirasuolo 2023", u: ADSQ("Padovani Cirasuolo Extremely Large Telescope 2023") } ] },

  { band: "optSp", core: false, name: "James Webb Space Telescope (JWST)", link: "https://en.wikipedia.org/wiki/James_Webb_Space_Telescope",
    img: "bhns_card_images/JWST_spacecraft_model_3.png",
    tstart: 2022, tend: null, spec: { kind: "em", segs: [[13.03, 14.70]] },
    freq: "0.6–28 µm", about: "A 6.5-m space telescope optimised for the infrared (0.6–28 µm). IR imaging and low/medium-resolution spectroscopy, kilonova nebular spectra (e.g. tellurium in GRB 230307A), SN progenitors and dust-obscured transients. ~20 years of fuel.",
    use: "Kilonova nebular spectra (Te in GRB 230307A); SN progenitors; dust-obscured transients",
    refs: [ { t: "Gardner + 2023", u: ADS("arXiv:2304.04869") }, { t: "Levan + 2024", u: ADS("arXiv:2307.02098") } ] },

  { band: "optSp", core: false, name: "Hubble Space Telescope (HST)", link: "https://en.wikipedia.org/wiki/Hubble_Space_Telescope",
    img: "bhns_card_images/Hubble-Space-Telescope-in-Orbit.jpg",
    tstart: 1990, tend: null, spec: { kind: "em", segs: [[14.25, 15.52]] },
    freq: "90 nm – 1.7 µm", about: "The 2.4-m Hubble Space Telescope, working from the UV to the near-IR. High-resolution imaging/spectroscopy and ~0.2-mas relative astrometry, measured the astrometric microlensing of the first isolated BH (Sahu et al. 2022) and takes UV spectra of stripped stars. Re-entry in the 2030s without a boost.",
    use: "Astrometric µ-lensing isolated BH (Sahu et al. 2022); UV spectra of stripped stars",
    refs: [ { t: "Sahu + 2022", u: ADS("arXiv:2201.13296") } ] },

  // ---------- Ultraviolet ----------
  { band: "uv", core: false, name: "ULTRASAT", link: "https://en.wikipedia.org/wiki/ULTRASAT",
    img: "bhns_card_images/ULTRASAT.png",
    tstart: 2027, tend: 2033, future: true, spec: { kind: "em", segs: [[15.01, 15.12]] },
    freq: "NUV 230–290 nm; 204 deg² FoV", about: "An Israeli/NASA wide-field UV satellite in geostationary orbit, the first wide-field UV time-domain survey, slewing to >50% of the sky in minutes with alerts within 20 min. Catches SN shock-breakout/cooling and early kilonova UV, with ~300× the grasp of GALEX. Launch Q4 2027; 3-yr prime.",
    use: "SN shock breakout & shock cooling; early kilonova UV; grasp 300× GALEX",
    refs: [ { t: "Shvartzvald + 2024", u: ADS("arXiv:2304.14482") } ] },

  { band: "uv", core: false, name: "UVEX", link: "https://www.uvex.caltech.edu/",
    img: "bhns_card_images/uvex.png",
    tstart: 2030, tend: 2032, future: true, spec: { kind: "em", segs: [[15.05, 15.33]] },
    freq: "FUV 139–190 + NUV 203–270 nm; R>1000 spectroscopy", about: "A NASA wide-field UV satellite: all-sky UV imaging plus rapid target-of-opportunity response and R>1000 UV spectroscopy. Good for censusing hot stripped stars by their UV excess (LMC/SMC) and for tracking kilonova UV evolution after GW alerts. NASA MIDEX; launch ~2030; 2-yr prime.",
    use: "Hot stripped-star census (LMC/SMC); kilonova UV evolution; GW follow-up",
    refs: [ { t: "Kulkarni + 2021", u: ADS("arXiv:2111.15608") } ] },

  { band: "uv", core: false, name: "Galaxy Evolution Explorer (GALEX)", link: "https://en.wikipedia.org/wiki/GALEX",
    img: "bhns_card_images/GALEX_spacecraft_model.png",
    tstart: 2003, tend: 2013, spec: { kind: "em", segs: [[15.03, 15.35]] },
    freq: "FUV 135–175 + NUV 175–280 nm", about: "A NASA all-sky UV imaging mission (2003–2013), now an archive. Its UV maps remain the go-to resource for selecting stripped-star candidates by their UV excess today.",
    use: "UV-excess selection of stripped-star candidates today",
    refs: [ { t: "Martin + 2005", u: ADS("2005ApJ...619L...1M") } ] },

    // ---------- X-ray ----------
    { band: "xray", core: false, name: "Chandra", link: "https://en.wikipedia.org/wiki/Chandra_X-ray_Observatory",
      img: "bhns_card_images/Chandra_artist_illustration.jpg",
      tstart: 1999, tend: null, spec: { kind: "em", segs: [[16.38, 18.38]] },
      freq: "0.1–10 keV; 0.5″ resolution", about: "NASA's flagship X-ray observatory, with sub-arcsecond imaging and grating spectroscopy. Resolves extragalactic X-ray-binary and ULX populations, measures NS cooling, and caught the X-ray afterglow of GW170817.",
      use: "Extragalactic XRB/ULX populations; NS cooling; GW170817 X-ray afterglow",
      refs: [ { t: "Weisskopf + 2000", u: ADSQ("Weisskopf Chandra X-ray Observatory 2000") } ] },

    { band: "xray", core: false, name: "NuSTAR", link: "https://en.wikipedia.org/wiki/NuSTAR",
      img: "bhns_card_images/NuSTAR_spacecraft_model.png",
      tstart: 2012, tend: null, spec: { kind: "em", segs: [[17.86, 19.28]] },
      freq: "3–79 keV (focusing)", about: "A NASA satellite that focuses hard X-rays (3–79 keV), the high-energy complement to softer X-ray telescopes. Hard-X-ray imaging spectroscopy: finds ULX pulsars, measures BH spins via disc reflection, and follows magnetar outbursts.",
      use: "ULX pulsars; reflection-based BH spins; magnetar outbursts",
      refs: [ { t: "Harrison + 2013", u: ADS("arXiv:1301.7307") } ] },

    { band: "xray", core: false, name: "Neutron Star Interior Composition Explorer (NICER)", link: "https://en.wikipedia.org/wiki/Neutron_Star_Interior_Composition_Explorer",
      img: "bhns_card_images/NICER_on_the_ISS.jpg",
      tstart: 2017, tend: null, spec: { kind: "em", segs: [[16.68, 18.46]] },
      freq: "0.2–12 keV; ~100 ns timing", about: "An X-ray timing instrument mounted on the ISS, dedicated to neutron stars (0.2–12 keV, ~100 ns timing). Soft-X-ray timing and phase-resolved spectroscopy, models the pulse profile to pin NS mass and radius and constrain the dense-matter EoS (PSR J0030, J0740).",
      use: "NS mass–radius from pulse-profile modelling → EoS (PSR J0030, J0740)",
      refs: [ { t: "Gendreau + 2016", u: ADSQ("Gendreau NICER 2016 SPIE") }, { t: "Riley + 2021", u: ADS("arXiv:2105.06980") }, { t: "Miller + 2021", u: ADS("arXiv:2105.06979") } ] },
      
  { band: "xray", core: false, name: "XMM-Newton", link: "https://en.wikipedia.org/wiki/XMM-Newton",
    img: "bhns_card_images/XMM-Newton_spacecraft_model.png",
    tstart: 1999, tend: null, spec: { kind: "em", segs: [[16.56, 18.46]] },
    freq: "0.15–12 keV", about: "ESA's large-collecting-area X-ray observatory (0.15–12 keV). High-throughput spectroscopy and timing, good for quiescent low-mass X-ray binaries, magnetars and monitoring ULXs.",
    use: "Quiescent LMXBs; magnetars; ULX monitoring",
    refs: [ { t: "Jansen + 2001", u: ADS("2001A&A...365L...1J") } ] },

  { band: "xray", core: false, name: "eROSITA (SRG)", link: "https://en.wikipedia.org/wiki/EROSITA",
    img: "bhns_card_images/x-ray-space-telescope-erosita-3889035778.jpg",
    tstart: 2019, tend: 2022, spec: { kind: "em", segs: [[16.68, 18.28]] },
    freq: "0.2–8 keV", about: "The soft-X-ray all-sky survey instrument on the SRG mission, mapping the whole sky every ~6 months. Finds new X-ray binaries and transients and builds population statistics. Survey paused Feb 2022; eRASS1 catalogue released 2024.",
    use: "New XRBs & transients; population statistics",
    refs: [ { t: "Predehl + 2021", u: ADS("arXiv:2010.03477") } ] },

  { band: "xray", core: false, name: "Einstein Probe", link: "https://en.wikipedia.org/wiki/Einstein_Probe",
    img: "bhns_card_images/Einstein_Probe_illustration.png",
    tstart: 2024, tend: null, spec: { kind: "em", segs: [[16.86, 18.38]] },
    freq: "WXT 0.5–4 keV (lobster-eye, 3600 deg²); FXT 0.3–10 keV", about: "A CAS-led X-ray mission pairing a wide-field lobster-eye monitor (3600 deg²) with a follow-up telescope. Catches fast X-ray transients, new X-ray-binary outbursts and TDEs, and chases GW and FRB counterparts. With ESA & MPE participation; 3+ yr.",
    use: "Fast X-ray transients, new XRB outbursts, TDEs, GW & FRB counterpart searches",
    refs: [ { t: "Yuan + 2022", u: ADS("arXiv:2209.09763") } ] },
    
    { band: "xray", core: false, name: "NewAthena", link: "https://www.esa.int/Science_Exploration/Space_Science/NewAthena_factsheet",
      img: "bhns_card_images/Athena_Advanced_Telescope_for_High-ENergy_Astrophysics_pillars.jpg",
      tstart: 2037, tend: null, future: true, spec: { kind: "em", segs: [[16.68, 18.46]] },
      freq: "0.2–12 keV", about: "ESA's future large X-ray observatory, combining an X-IFU microcalorimeter and a Wide Field Imager at large collecting area. Built for faint EoS targets, high-z GRB afterglows and X-ray counterparts in the ET era. ESA adoption ~2027; launch ~2037.",
      use: "Faint EoS targets; high-z GRB afterglows; ET-era X-ray counterpart workhorse",
      refs: [ { t: "Nandra + 2013", u: ADS("arXiv:1306.2307") } ] },

  // { band: "xray", core: false, name: "SVOM", link: "https://en.wikipedia.org/wiki/Space_Variable_Objects_Monitor",
  //   img: "bhns_card_images/svom.jpg",
  //   tstart: 2024, tend: null, spec: { kind: "em", segs: [[16.68, 19.56]] },
  //   freq: "ECLAIRs 4–150 keV; MXT 0.2–10 keV; + GRM, VT optical", product: "GRB discovery & built-in multiband follow-up chain",
  //   notes: "CNES/CAS mission; launched Jun 2024.",
  //   use: "GRBs incl. high-z; complements Swift",
  //   refs: [ { t: "Wei + 2016", u: ADS("arXiv:1610.06892") } ] },

  // { band: "xray", core: false, name: "XRISM", link: "https://en.wikipedia.org/wiki/X-Ray_Imaging_and_Spectroscopy_Mission",
  //   img: "bhns_card_images/xrism.jpg",
  //   tstart: 2023, tend: null, spec: { kind: "em", segs: [[16.86, 18.46]] },
  //   freq: "0.3–12 keV; Resolve R~1200", product: "Microcalorimeter high-resolution spectroscopy",
  //   notes: "",
  //   use: "Disc winds & plasma velocities in XRBs and SN remnants",
  //   refs: [ { t: "Tashiro + 2020", u: ADSQ("Tashiro XRISM status 2020") } ] },
  // { band: "xray", core: false, name: "IXPE", link: "https://en.wikipedia.org/wiki/Imaging_X-ray_Polarimetry_Explorer",
  //   img: "bhns_card_images/ixpe.jpg",
  //   tstart: 2021, tend: null, spec: { kind: "em", segs: [[18.06, 18.28]] },
  //   freq: "2–8 keV (polarimetry)", product: "Imaging X-ray polarimetry",
  //   notes: "",
  //   use: "Accretion geometry of XRBs; magnetar magnetospheres",
  //   refs: [ { t: "Weisskopf + 2022", u: ADS("arXiv:2112.01269") } ] },

  // ---------- Gamma-ray ----------
    
  { band: "gamma", core: false, name: "INTEGRAL", link: "https://en.wikipedia.org/wiki/INTEGRAL",
    img: "bhns_card_images/INTEGRAL_spacecraft_model.png",
    tstart: 2002, tend: 2024, spec: { kind: "em", segs: [[19.56, 21.38]] },
    freq: "15 keV–10 MeV", about: "ESA's hard-X-ray/soft-γ-ray imaging spectrometer (15 keV–10 MeV), now archival. Independently detected GRB 170817A and mapped ⁴⁴Ti and the 511-keV e⁺e⁻ line. Science operations ended.",
    use: "Independent GRB 170817A detection; ⁴⁴Ti & e⁺e⁻ 511 keV lines",
    refs: [ { t: "Winkler + 2003", u: ADS("2003A&A...411L...1W") }, { t: "Savchenko + 2017", u: ADS("arXiv:1710.05449") } ] },

  { band: "gamma", core: false, name: "Swift Gamma-Ray Burst Explorer", link: "https://en.wikipedia.org/wiki/Neil_Gehrels_Swift_Observatory",
    img: "bhns_card_images/Swift_Observatory_spacecraft_model.png",
    tstart: 2004, tend: null, spec: { kind: "em", segs: [[14.70, 15.25], [16.86, 19.56]] },
    freq: "BAT 15–150 keV; XRT 0.3–10 keV; UVOT 170–600 nm", about: "A NASA three-telescope observatory (γ-ray BAT + X-ray XRT + UV/optical UVOT) that discovers GRBs and autonomously localises them to arcseconds within minutes. Follows short-GRB afterglows, monitors XRB outbursts, and caught the UV kilonova of GW170817.",
    use: "Short-GRB afterglows; XRB outburst monitoring; kilonova UV (GW170817)",
    refs: [ { t: "Gehrels + 2004", u: ADS("2004ApJ...611.1005G") } ] },

  { band: "gamma", core: false, name: "Fermi Gamma-ray Space Telescope", link: "https://en.wikipedia.org/wiki/Fermi_Gamma-ray_Space_Telescope",
    img: "bhns_card_images/Fermi_Gamma-ray_Space_Telescope_spacecraft_model.png",
    tstart: 2008, tend: null, spec: { kind: "em", segs: [[19.29, 25.86]] },
    freq: "GBM 8 keV–40 MeV; LAT 20 MeV–300 GeV", about: "A NASA γ-ray space telescope combining the all-sky GBM burst monitor (8 keV–40 MeV) with the LAT GeV survey instrument (20 MeV–300 GeV). Its GBM caught GRB 170817A just 1.7 s after the GW; it also sees magnetar giant flares and γ-ray (spider) pulsars.",
    use: "GRB 170817A (1.7 s after the GW!); magnetar giant flares; γ-ray (spider) pulsars",
    refs: [ { t: "Meegan + 2009", u: ADS("arXiv:0908.0450") }, { t: "Atwood + 2009", u: ADS("arXiv:0902.1089") }, { t: "Abbott + 2017", u: ADS("arXiv:1710.05834") } ] },
  
  { band: "gamma", core: false, name: "Cherenkov Telescope Array Observatory (CTAO)", link: "https://en.wikipedia.org/wiki/Cherenkov_Telescope_Array",
    img: "bhns_card_images/Roque_de_los_Muchachos_-_ORM_-_LST-1_-_02.jpg",
    tstart: 2026, tend: null, future: true, spec: { kind: "em", segs: [[24.68, 28.86]] },
    freq: "20 GeV–300 TeV", about: "The Cherenkov Telescope Array Observatory: imaging atmospheric Cherenkov arrays in the northern and southern hemispheres covering 20 GeV–300 TeV. Detects very-high-energy γ-rays, TeV GRB afterglows, pulsar-wind nebulae and microquasar jets. Partial arrays observing; full arrays ~late 2020s.",
    use: "TeV GRB afterglows; PWNe; µquasar jets",
    refs: [ { t: "CTA Consortium 2019", u: ADS("arXiv:1709.07997") } ] },

  // { band: "gamma", core: false, name: "COSI", link: "https://en.wikipedia.org/wiki/Compton_Spectrometer_and_Imager",
  //   img: "bhns_card_images/cosi.jpg",
  //   tstart: 2027, tend: null, future: true, spec: { kind: "em", segs: [[19.68, 21.08]] },
  //   freq: "0.2–5 MeV", product: "Compton imaging, spectroscopy & polarimetry; all-sky daily",
  //   notes: "NASA SMEX; launch 2027.",
  //   use: "⁵⁶Ni/⁴⁴Ti decay lines from SNe; Galactic 511 keV positron map; MeV transients",
  //   refs: [ { t: "Tomsick + 2023", u: ADS("arXiv:2308.12362") } ] },
];